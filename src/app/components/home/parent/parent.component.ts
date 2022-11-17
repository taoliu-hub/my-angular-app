import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg_parent: string = 'I am message.';
  out_newDetails : any = null;

  @ViewChild(ChildComponent)
  child_comp: ChildComponent = new ChildComponent;
  quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  c_add(newDetails:string){
    console.log(newDetails);
    this.out_newDetails = newDetails;
  }


  ngAfterViewInit() {
    this.child_comp.childMethod();
    console.log(this.quantity);
    this.quantity = this.child_comp.inStock;
    console.log(this.quantity);
  }

}
