import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const genRandomNumbers:any;

interface JSP {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  rNum = <[]> genRandomNumbers().sort(function(x:number,y:number){
    return x - y;
  });
  config: any;

  rNumFilter = [];

  todos: JSP[] = [];
  pageForTodo = 1;
  count = 100;

  constructor(
    private http: HttpClient,
  ) {
    const constRNum = this.rNum;
    this.rNumFilter = constRNum.filter((x: number) => x < 2000);
    // console.log(this.rNumFilter);

    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.rNum.length
    };
  }

  ngOnInit(): void {
    console.log("Method: ngOnInit ==> ProductComponent");
    this.http.get<JSP[]>("http://localhost:3000/todos")
    .subscribe(result => {
      console.log(result);
      this.todos = result;
    });
  }

  pageChanged(event:any) {
    this.config.currentPage = event;
  }

  maxSize(event:any) {
    console.log(event);
  }

}
