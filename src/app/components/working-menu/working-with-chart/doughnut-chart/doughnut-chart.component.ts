import { Component } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    title: { // 'left' | 'right' | 'top' | 'bottom' | 'chartArea'
      text: 'doughnut Chart'
    }
  };
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

}