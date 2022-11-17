import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import DatalabelsPlugin  from 'chartjs-plugin-datalabels';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  
  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: { // 'left' | 'right' | 'top' | 'bottom' | 'chartArea'
      text: 'Pie Chart'
    }
  };
  public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [DatalabelsPlugin];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

}