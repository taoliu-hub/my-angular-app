import { NgModule } from '@angular/core';
import { AngularGuideRoutingModule } from './angular-guide-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LifecycleComponent } from './life-cycle/life-cycle.component';
import { CommonShareModule } from 'src/app/common-share.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    LifecycleComponent
  ],
  imports: [
    CommonShareModule,
    AngularGuideRoutingModule
  ]
})
export class AngularGuideModule { }
