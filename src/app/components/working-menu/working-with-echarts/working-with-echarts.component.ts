import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-working-with-echarts',
  templateUrl: './working-with-echarts.component.html',
  styleUrls: ['./working-with-echarts.component.css']
})
export class WorkingWithEchartsComponent implements OnInit {

  //examples: https://echarts.apache.org/examples/zh/index.html
  constructor() {
    console.log(echarts)
  }

  ngOnInit() { }


}
