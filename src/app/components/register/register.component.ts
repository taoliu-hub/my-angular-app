import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'src/app/utils/Validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.getAllUsers().then(data => this.existsUser = data);
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required, ],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),

          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        isLoggedIn: [false]
      },
      {
        validators: [Validation.match('password', 'confirmPassword'), this.isDuplicate('fullname'), this.isDuplicate('username')]
      }
    );
  }

  ngOnInit(): void {
  }

  // Reactive Forms
  form: FormGroup;
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  existsUser = [];
  async onSubmit(): Promise<void> {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    await this.http.post("http://localhost:3000/users", this.form.value).toPromise().then(data => {
      alert("Registration succeeded.");
      console.log("success: ", data);
      this.router.navigateByUrl(`/login`);
    },
    error => {
      alert("Registration failed.");
      console.log("error: ", error);
    })
    this.existsUser = await this.getAllUsers();
  }

  getAllUsers(){
    return this.http.get<[]>("http://localhost:3000/users").toPromise();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  isDuplicate(controlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      let nameList: string[] = [];
      this.existsUser?.forEach((element:any) => {
        nameList.push(element[controlName]);
      });
      const control = controls.get(controlName);;
      if (nameList.includes(control?.value)) {
        controls?.get(controlName)?.setErrors({ isDuplicate: true });
        return { isDuplicate: true };
      } else {
        return null;
      }
    };
  }

}
