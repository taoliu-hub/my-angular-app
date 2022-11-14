import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { ParentComponent } from '../components/parent/parent.component';
import { ProductDetailsComponent } from '../components/products/product-details/product-details.component';
import { ProductComponent } from '../components/products/product/product.component';
import { WorkingWithFormsComponent } from '../components/working-with-forms/working-with-forms.component';

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
  {path: 'woring-with-forms', canActivate:[AuthGuard], component: WorkingWithFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
