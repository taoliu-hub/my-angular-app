import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: AllChartsComponent },
  { path: 'bar-chart', canActivate: [AuthGuard], component: BarChartComponent },
  { path: 'bubble-chart', canActivate: [AuthGuard], component: BubbleChartComponent },
  { path: 'doughnut-chart', canActivate: [AuthGuard], component: DoughnutChartComponent },
  { path: 'dynamic-chart', canActivate: [AuthGuard], component: DynamicChartComponent },
  { path: 'line-chart', canActivate: [AuthGuard], component: LineChartComponent },
  { path: 'pie-chart', canActivate: [AuthGuard], component: PieChartComponent },
  { path: 'polarArea-chart', canActivate: [AuthGuard], component: PolarAreaChartComponent },
  { path: 'radar-chart', canActivate: [AuthGuard], component: RadarChartComponent },
  { path: 'scatter-chart', canActivate: [AuthGuard], component: ScatterChartComponent },
  { path: 'financial-chart', canActivate: [AuthGuard], component: FinancialChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class WorkingWithChartRoutingModule { }
