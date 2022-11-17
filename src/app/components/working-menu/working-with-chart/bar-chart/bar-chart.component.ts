import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
/*注意，下面datalabel的引用和ng2-charts官方例子写法不一样，不能用花括号。
  这里的 pluginDataLabels是随便起的名字，改成ABC都可以。*/
import DatalabelsPlugin  from 'chartjs-plugin-datalabels';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public chart: any = null;
  chartcColors = ['#3a0262', '#852e74', '#b95c85', '#e19096', '#f7c2a6', '#ffecb3'];

  constructor() {
  }

  ngOnInit(): void {

  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: { // 'left' | 'right' | 'top' | 'bottom' | 'chartArea'
      text: 'Bar Chart'
    },
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0
          }
        }
      ]
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [DatalabelsPlugin ]; //显示每一列的数值
  public barChartColors: Color[] = [
    { backgroundColor: '#5DB4EE' }, //可放多个颜色
    { backgroundColor: '#b95c85' } //可放多个颜色
  ]

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },  //可放多个系列
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ]


  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
