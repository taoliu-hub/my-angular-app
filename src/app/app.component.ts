import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  isCollapsed = true;
  authData: any;
  localStorageAuthData: any;

  constructor(
    private profileService: ProfileService,
    private router: Router
  ){
    const _this = this;
    window.onbeforeunload = function(){
      console.log("onbeforeunload", _this.authData);
    }
  }

  ngOnInit(): void {
  }

  runningFlag = true;
  ngDoCheck(){
    this.getAuthData();
  }

  getAuthData() {
    this.localStorageAuthData = this.profileService.getDecryptionObj('token');
    if (this.runningFlag && ((!this.authData && this.localStorageAuthData) || this.localStorageAuthData?.nickname !== this.authData?.nickname)) {
      this.runningFlag = false;
      setTimeout(() => {
        this.authData = _.cloneDeep(this.localStorageAuthData);
        console.log("setTimeout  ==>", "nickname", this.authData?.nickname);
        this.runningFlag = true;
      }, 500);
    } else {
      this.authData = this.authData && this.localStorageAuthData ? this.authData : null;
    }
  }

  logout() {
    if (this.authData && this.authData?.isLoggedIn){
      this.authData.isLoggedIn = false;
      console.log("this.authData: ", this.authData);
      this.profileService.updateLoggedStatus(this.authData).subscribe((res: any) => {
        console.log("res: ", res);
        this.authData = null;
        // store clean
        localStorage.clear();
        alert("Logout success. Please login again.");
        this.router.navigate(['/login']);
      },
        error => {
          alert("Logout failed. Please try again.");
          console.log("error: ", error);
        });
    } else {
      alert("Logout failed. You have not Login in sussess. Please try again.");
    }
  }

  goToBlog() {
    if (this.authData?.website) {
      window.open(this.authData?.website);
    } else {
      alert("Sorry, you have no website for BLOG.")
    }
  }


}
