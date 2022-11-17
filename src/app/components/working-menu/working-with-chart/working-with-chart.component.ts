import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-working-with-chart',
  templateUrl: './working-with-chart.component.html',
  styleUrls: ['./working-with-chart.component.css']
})
export class WorkingWithChartComponent implements OnInit {


  constructor() {
    Chart.defaults.global.defaultFontColor = '#50577C';
    if(Chart.defaults.global.title?.position) {
      Chart.defaults.global.title.display = true;
      Chart.defaults.global.title.position = 'bottom';
    }
  }

  ngOnInit(): void {

  }


}
