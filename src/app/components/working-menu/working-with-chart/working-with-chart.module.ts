import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { WorkingWithChartRoutingModule } from './working-with-chart-routing.module';
import { AllChartsComponent } from './all-charts/all-charts.component';


@NgModule({
  declarations: [
    AllChartsComponent,
    BarChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    DynamicChartComponent,
    LineChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    ScatterChartComponent
  ],
  imports: [
    WorkingWithChartRoutingModule,
    ChartsModule
  ],
  exports: [
    AllChartsComponent,
    BarChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    DynamicChartComponent,
    LineChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    ScatterChartComponent
  ]
})
export class WorkingWithChartModule { }
