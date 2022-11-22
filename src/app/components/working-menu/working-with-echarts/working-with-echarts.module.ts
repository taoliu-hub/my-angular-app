import { NgModule } from '@angular/core';

import { WorkingWithEchartsRoutingModule } from './working-with-echarts-routing.module';
import { WorkingWithEchartsComponent } from './working-with-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { DynamicSortingBarChartComponent } from './dynamic-sorting-bar-chart/dynamic-sorting-bar-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { CommonShareModule } from 'src/app/common-share.module';


@NgModule({
  declarations: [
    WorkingWithEchartsComponent,
    DynamicSortingBarChartComponent,
    StackedAreaChartComponent
  ],
  imports: [
    CommonShareModule,
    NgxEchartsModule,  //examples: https://echarts.apache.org/examples/zh/index.html
    WorkingWithEchartsRoutingModule
  ]
})
export class WorkingWithEchartsModule { }
