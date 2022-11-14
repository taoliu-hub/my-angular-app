import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),

          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      }
    );
  }

  ngOnInit(): void {
  }

  // Login Forms
  form: FormGroup;
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onLogin(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // console.log(JSON.stringify(this.form.value, null, 2));
    this.http.get<any>(`http://localhost:3000/users?username=${this.form.value.username}&password=${this.form.value.password}`).subscribe(async data => {
      // console.log("Response: ", data);
      if (data?.length > 0) {
        alert("Login success.");
        data[0].isLoggedIn = true;
        this.profileService.updateLoggedStatus(data[0]).subscribe((res : any)  => {
          console.log(res);
          this.profileService.user =  _.cloneDeep(res);
          delete this.profileService.user.password;
          delete this.profileService.user.confirmPassword;
          console.log("user: ", this.profileService.user);
          // store sesstion
          sessionStorage.setItem('userInfo', JSON.stringify(this.profileService.user));
          this.profileService.setLoginStatus(res?.isLoggedIn);
          // this.router.navigateByUrl(`/welcome`);
          this.router.navigate(['/welcome']);
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

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
