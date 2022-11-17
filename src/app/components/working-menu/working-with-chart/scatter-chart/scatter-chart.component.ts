import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: [ './scatter-chart.component.css' ]
})
export class ScatterChartComponent {
  // scatter
  public scatterChartOptions: ChartOptions = {
    responsive: true,
    title: { // 'left' | 'right' | 'top' | 'bottom' | 'chartArea'
      text: 'Scatter Chart'
    }
  };
  public scatterChartLabels: Label[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];
  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

}