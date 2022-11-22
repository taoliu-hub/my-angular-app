import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './life-cycle/life-cycle.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'life-cycle', component: LifecycleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
