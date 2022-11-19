import { NgModule } from "@angular/core";
import { CommonShareModule } from "src/app/common-share.module";
import { ChildComponent } from "./child/child.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ParentComponent } from "./parent/parent.component";
import { ProductDetailsComponent } from "./product/product-details/product-details.component";
import { ProductComponent } from "./product/product.component";


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonShareModule,
  ],
  exports:[]
})
export class HomeModule { }
