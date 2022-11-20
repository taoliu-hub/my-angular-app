import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LanguageFn } from "highlight.js";
import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CommonShareModule } from 'src/app/common-share.module';
import { FormsModule } from '@angular/forms';

export function hljsLanguages(): { [name: string]: Partial<LanguageFn> } {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    // html: import('highlight.js/lib/languages/html'),
    // scss: import('highlight.js/lib/languages/scss'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}
@NgModule({
  declarations: [
    BarChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    DynamicChartComponent,
    LineChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    ScatterChartComponent,
    FinancialChartComponent
  ],
  imports: [
    CommonShareModule,
    MarkdownModule,
    NgChartsModule,
    HighlightModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [
    BarChartComponent,
    BubbleChartComponent,
    DoughnutChartComponent,
    DynamicChartComponent,
    LineChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    ScatterChartComponent,
    FinancialChartComponent,
    MarkdownModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: hljsLanguages()
      }
    }
  ]
})
export class WorkingWithChartModule { }
