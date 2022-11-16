import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { CommonShareModule } from '../common-share.module';
import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/products/product/product.component';
import { ProductDetailsComponent } from '../components/products/product-details/product-details.component';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';
import { WorkingWithFormsComponent } from '../components/working-with-forms/working-with-forms.component';
import { WorkingWithExcelComponent } from '../components/working-with-excel/working-with-excel.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    ParentComponent,
    ChildComponent,
    WorkingWithFormsComponent,
    WorkingWithExcelComponent,
  ],
  imports: [
    CommonShareModule,
    HomeRoutingModule,
  ],
  exports:[]
})
export class HomeModule { }
