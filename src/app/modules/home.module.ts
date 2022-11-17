import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { CommonShareModule } from '../common-share.module';
import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/home/products/product/product.component';
import { ProductDetailsComponent } from '../components/home/products/product-details/product-details.component';
import { ParentComponent } from '../components/home/parent/parent.component';
import { ChildComponent } from '../components/home/child/child.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    CommonShareModule,
    HomeRoutingModule,
  ],
  exports:[]
})
export class HomeModule { }
