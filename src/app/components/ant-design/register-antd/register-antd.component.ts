import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-register-antd',
  templateUrl: './register-antd.component.html',

  styleUrls: ['./register-antd.component.css']
})
export class RegisterAntdComponent implements OnInit {



  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  existsUser:any = [];
  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      return;
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    console.log(JSON.stringify(this.validateForm.value, null, 2));
    await this.http.post("http://localhost:3000/users", this.validateForm.value).toPromise().then(data => {
      alert("Registration successed.");
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
    Promise.resolve().then(() => this.validateForm.controls['confirmPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: UntypedFormBuilder,
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

}

