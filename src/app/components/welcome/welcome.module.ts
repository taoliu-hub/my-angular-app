import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { LifecycleComponent } from './life-cycle/life-cycle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent, LifecycleComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
