import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { DynamicSortingBarChartComponent } from './dynamic-sorting-bar-chart/dynamic-sorting-bar-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dynamic-sorting-bar-chart' },
  { path: 'dynamic-sorting-bar-chart', canActivate: [AuthGuard], component: DynamicSortingBarChartComponent },
  { path: 'stacked-area-chart', canActivate: [AuthGuard], component: StackedAreaChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingWithEchartsRoutingModule { }
