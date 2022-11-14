import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()
  msg_child: string = '';

  inStock = 10;

  @Output()
  c_newChildEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add(value: string) {
    this.c_newChildEvent.emit(value);
  }

  childMethod() {
    console.log('A method in the Product Component - the child!');
  }

}
