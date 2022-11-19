import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { WorkingWithChartComponent } from './working-with-chart/working-with-chart.component';
import { WorkingWithExcelComponent } from './working-with-excel/working-with-excel.component';
import { WorkingWithFormsComponent } from './working-with-forms/working-with-forms.component';
import { WorkingWithMultiselectDropdownComponent } from './working-with-multiselect-dropdown/working-with-multiselect-dropdown.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'woring-with-forms' },
  { path: 'woring-with-forms', canActivate: [AuthGuard], component: WorkingWithFormsComponent },
  { path: 'woring-with-excels', canActivate: [AuthGuard], component: WorkingWithExcelComponent },
  { path: 'woring-with-charts', canActivate: [AuthGuard], component: WorkingWithChartComponent,
    loadChildren: () => import('./working-with-chart/working-with-chart.module').then(m => m.WorkingWithChartModule), //异步加载、惰性加载、懒加载
  },
  { path: 'woring-with-multiselect-dropdown', canActivate: [AuthGuard], component: WorkingWithMultiselectDropdownComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class WorkingMenuRoutingModule { }
