import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
@Component({
  selector: 'app-register-antd',
  templateUrl: './register-antd.component.html',

  styleUrls: ['./register-antd.component.css']
})
export class RegisterAntdComponent implements OnInit {
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  existsUser = [];
  async submitForm(): Promise<void> {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
    if (this.validateForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.validateForm.value, null, 2));
    await this.http.post("http://localhost:3000/users", this.validateForm.value).toPromise().then(data => {
      alert("Registration succeeded.");
      console.log("success: ", data);
      this.router.navigateByUrl(`/login`);
    },
    error => {
      alert("Registration failed.");
      console.log("error: ", error);
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.confirmPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {    
    this.getAllUsers().then(data => this.existsUser = data);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.email, Validators.required, this.isDuplicateEmail]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false],
      isLoggedIn: [false]
    });
  }
  
  getAllUsers(){
    return this.http.get<[]>("http://localhost:3000/users").toPromise();
  }
  
  isDuplicateEmail = (control: FormControl): { [s: string]: boolean } => {
    let nameList: string[] = [];
    this.existsUser?.forEach((element:any) => {
      nameList.push(element?.username);
    });      
    if (nameList.includes(control.value)) {
      return { isDuplicateEmail: true, error: true };
    }
    return {};
  };

  // Override emailValidator function from @angular\forms\fesm2015\forms.js
  // emailValidator(control: FormControl): { [s: string]: boolean; } {
  //   if (control.value == null || control.value.length === 0) {
  //     return {}; // don't validate empty values to allow optional controls
  //   }
  //   return EMAIL_REGEXP.test(control.value) ? {} : { 'email': true };
  // }
  
  
}

// Override emailValidator function from @angular\forms\fesm2015\forms.js
function emailValidator(control: FormControl) : { [s: string]: boolean } {
  if (control.value == null || control.value.length === 0) {
      return {}; // don't validate empty values to allow optional controls
  }
  return EMAIL_REGEXP.test(control.value) ? {} : { 'email': true };
}