import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Chart, ChartOptions } from 'chart.js';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-working-with-chart',
  templateUrl: './working-with-chart.component.html',
  styleUrls: ['./working-with-chart.component.css']
})
export class WorkingWithChartComponent implements OnInit {


  private theme = 'ng2-charts-demo-light-theme';
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private themeService: ThemeService,
  ) {
    // For consistent rendering across CI and local envs
    Chart.defaults.set('font', { family: "Arial" })
  }

  ngOnInit(): void {
  }

  public get selectedTheme(): string {
    return this.theme;
  }

  public set selectedTheme(value: string) {
    this.renderer.removeClass(this.document.body, this.theme);
    this.theme = value;
    this.renderer.addClass(this.document.body, value);
    let overrides: ChartOptions;
    if (this.selectedTheme === 'ng2-charts-demo-light-theme') {
      overrides = {};
    } else {
      overrides = {
        scales: {
          x:
          {
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          y:
          {
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255,255,255,0.1)'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            },
          },
          // datalabels: {
          //   color: 'white',
          // }
        }
      };
    }
    this.themeService.setColorschemesOptions(overrides);
  }


}
