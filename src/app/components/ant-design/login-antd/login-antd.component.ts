import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  validateForm!: UntypedFormGroup;

  constructor(
    private profileService : ProfileService,
    private fb: UntypedFormBuilder,
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

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
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
          // this.router.navigateByUrl(`/angular-guide/welcome`);
          this.router.navigate(['/angular-guide/welcome']);
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
}
