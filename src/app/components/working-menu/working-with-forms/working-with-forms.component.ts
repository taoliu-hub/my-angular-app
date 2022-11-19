import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import Validation from '../../../utils/Validation';

@Component({
  selector: 'app-working-with-forms',
  templateUrl: './working-with-forms.component.html',
  styleUrls: ['./working-with-forms.component.css']
})
export class WorkingWithFormsComponent implements OnInit {

  customerName: string = 'taoliu';
  email: string = '';
  password: string = '';

  data$: Observable<any>;
  name = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]);

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.data$ = this.http.get("http://localhost:3000/customers")
      .pipe(
        tap(console.log),
        shareReplay()   // one call for: this.data$.subscribe();
      );

  }

  ngOnInit(): void {
    this.data$.subscribe();
    this.data$.subscribe();
    this.data$.subscribe();
  }

  submitDetails = () => {
    console.log(this.name.errors);
    alert(this.name.value);
  }

  id: number = 1;
  // validation pending
  onSubmitBasic(form: NgForm) {
    // console.log(form);
    console.log(form.value);
    this.http.post("http://localhost:3000/customers", form.value).subscribe((data:any) => {
      alert(`Success: add data for customers with id = ${data?.id}, customerName = ${data?.customerName}`);
      this.id = data?.id;
    })
  }

  deleteDocument() {
    this.http.delete(`http://localhost:3000/customers/${this.id}`).subscribe(
      data => {
        alert(`Success: delete data for customers with id = ${this.id}.`);
      }, err => {
        alert(`Failed: no data for id = ${this.id}.`);
      }
    );
  }

}
