import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { ParentComponent } from '../components/home/parent/parent.component';
import { ProductDetailsComponent } from '../components/home/products/product-details/product-details.component';
import { ProductComponent } from '../components/home/products/product/product.component';

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
