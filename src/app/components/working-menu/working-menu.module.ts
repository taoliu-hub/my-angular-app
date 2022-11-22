import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonShareModule } from 'src/app/common-share.module';
import { WorkingMenuRoutingModule } from './working-menu-routing.module';
import { WorkingWithChartComponent } from './working-with-chart/working-with-chart.component';
import { WorkingWithChartModule } from './working-with-chart/working-with-chart.module';
import { WorkingWithExcelComponent } from './working-with-excel/working-with-excel.component';
import { WorkingWithFormsComponent } from './working-with-forms/working-with-forms.component';
import { WorkingWithMultiselectDropdownComponent } from './working-with-multiselect-dropdown/working-with-multiselect-dropdown.component';
import { WorkingWithEchartsModule } from './working-with-echarts/working-with-echarts.module';


@NgModule({
  declarations: [
    WorkingWithFormsComponent,
    WorkingWithExcelComponent,
    WorkingWithChartComponent,
    WorkingWithMultiselectDropdownComponent
  ],
  imports: [
    WorkingMenuRoutingModule,
    CommonShareModule,
    NgMultiSelectDropDownModule,
    WorkingWithChartModule,
    WorkingWithEchartsModule
  ],
  exports: []
})
export class WorkingMenuModule { }
