import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isCollapsed = true;
  authData: any;

  constructor(
    private profileService: ProfileService,
    private router: Router
  ){
    const _this = this;
    window.onbeforeunload = function(){
      console.log("onbeforeunload", _this.authData);
    }
    if(!this.authData && localStorage['username']){
      setTimeout(() => {
        console.log("setTimeout  ==>");
        this.getAuthData();
      }, 0);
    }
  }

  ngOnInit(): void {
  }

  getAuthData(){
    this.authData = this.profileService.getDecryptionObj('token');
  }

  logout() {
    if (this.authData && this.authData?.isLoggedIn){
      this.authData.isLoggedIn = false;
      console.log("this.authData: ", this.authData);
      this.profileService.updateLoggedStatus(this.authData).subscribe((res: any) => {
        console.log("res: ", res);
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
