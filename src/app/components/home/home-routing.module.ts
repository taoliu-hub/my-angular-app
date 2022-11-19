import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/auth.guard";
import { HomeComponent } from "./home.component";
import { ParentComponent } from "./parent/parent.component";
import { ProductDetailsComponent } from "./product/product-details/product-details.component";
import { ProductComponent } from "./product/product.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product', canActivate:[AuthGuard], component: ProductComponent,
    children: [
      {
        path: 'product-details', component: ProductDetailsComponent,
      }
    ]
  },
  {path: 'parent', canActivate:[AuthGuard], component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
