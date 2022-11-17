import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  polarAreaChartOptions: ChartOptions = {
    responsive: true,
    title: { // 'left' | 'right' | 'top' | 'bottom' | 'chartArea'
      text: 'PolarArea Chart'
    }
  };

  polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  polarAreaChartData: ChartDataSets[] = [{
    data: [300, 500, 100, 40, 120],
    label: 'Series 1'
  }];

  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';  //'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';

}
