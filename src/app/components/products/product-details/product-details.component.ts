import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Method: ngOnInit ==> ProductDetailsComponent");
  }


  pipeArr = [
    {'Pipe':'DatePipe', 'Purpose': 'To format a date value as per the rulesTo change the text to all uppercase'},
    {'Pipe':'UpperCasePipe', 'Purpose': 'To change the text to all uppercase'},
    {'Pipe':'LowerCasePipe', 'Purpose': 'To change the text to all lowercase'},
    {'Pipe':'CurrencyPipe', 'Purpose': 'To change a number to a currency string'},
    {'Pipe':'DecimalPipe', 'Purpose': 'To change a number to a string with a decimal value'},
    {'Pipe':'PercentPipe', 'Purpose': 'To change a number to a percentage string'},
    {'Pipe':'JsonPipe', 'Purpose': 'To change a JavaScript object to a JSON string'},
    {'Pipe':'SlicePipe', 'Purpose': 'To return a slice of an array'},
    {'Pipe':'AsyncPipe', 'Purpose': 'To accept an observable and render the output'}
  ]

}
