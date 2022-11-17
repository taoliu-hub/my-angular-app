import { NgModule } from '@angular/core';

import { WorkingWithFormsComponent } from './working-with-forms/working-with-forms.component';
import { WorkingWithChartComponent } from './working-with-chart/working-with-chart.component';
import { WorkingWithExcelComponent } from './working-with-excel/working-with-excel.component';

import { WorkingMenuRoutingModule } from './working-menu-routing.module';
import { LineChartComponent } from './working-with-chart/line-chart/line-chart.component';
import { BarChartComponent } from './working-with-chart/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './working-with-chart/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './working-with-chart/radar-chart/radar-chart.component';
import { PieChartComponent } from './working-with-chart/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './working-with-chart/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './working-with-chart/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './working-with-chart/scatter-chart/scatter-chart.component';
import { DynamicChartComponent } from './working-with-chart/dynamic-chart/dynamic-chart.component';
import { ChartsModule } from 'ng2-charts';
import { CommonShareModule } from 'src/app/common-share.module';
import { WorkingWithMultiselectDropdownComponent } from './working-with-multiselect-dropdown/working-with-multiselect-dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    WorkingWithFormsComponent,
    WorkingWithExcelComponent,
    WorkingWithChartComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    DynamicChartComponent,
    WorkingWithMultiselectDropdownComponent
  ],
  imports: [
    CommonShareModule,
    WorkingMenuRoutingModule,
    ChartsModule,
    NgMultiSelectDropDownModule
  ],
  exports: []
})
export class WorkingMenuModule { }
