import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: [ './dynamic-chart.component.css' ]
})
export class DynamicChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public chartOptions: ChartOptions = {
    responsive: true,
    title: { // 'left' | 'right' | 'top' | 'bottom' | 'chartArea'
      text: 'Dynamic Chart'
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            min: 10
          }
        }]
    },
    plugins: {
      legend: { display: true },
    }
  };
  public chartType: ChartType = 'bar';

  public chartLabels: Label[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
  public chartData: ChartDataSets[] = [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ];

  public randomize(): void {
    this.chartType = this.chartType === 'bar' ? 'line' : 'bar';
  }
}