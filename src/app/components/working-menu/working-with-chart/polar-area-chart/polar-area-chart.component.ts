import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: [ './polar-area-chart.component.css' ]
})
export class PolarAreaChartComponent {
  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [ {
      data: [ 300, 500, 100, 40, 120 ],
      label: 'Series 1'
    } ]
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  
  public polarAreaChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title: {
        align: 'center',
        display: true,
        position: 'bottom',
        fullSize: true,
        color: 'green',
        text: 'Polar-Area Chart'
      },
    }
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}