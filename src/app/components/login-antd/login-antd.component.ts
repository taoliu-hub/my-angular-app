import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-login-antd',
  templateUrl: './login-antd.component.html',
  styleUrls: ['./login-antd.component.css']
})
export class LoginAntdComponent implements OnInit {

  user: any;
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.validateForm.value, null, 2));
    this.http.get<any>(`http://localhost:3000/users?username=${this.validateForm.value.username}&password=${this.validateForm.value.password}`).subscribe(async data => {
      // console.log("Response: ", data);
      if (data?.length > 0) {
        console.log("Login success.");
        data[0].isLoggedIn = true;
        this.profileService.updateLoggedStatus(data[0]).subscribe((res : any)  => {
          console.log("res", res);
          localStorage["username"] = res?.username;
          this.profileService.setEncryptionObj("token", res);
          this.profileService.authInfo = res;
          this.profileService.setAuthData$();
          // this.router.navigateByUrl(`/welcome`);
          this.router.navigate(['/index']);
        });
      } else {
        alert("User does not exist. Please try again.");
      }
    },
      error => {
        alert("Login failed.");
        console.log("error: ", error);
      })
  }

  constructor(
    private profileService : ProfileService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    localStorage.clear();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
