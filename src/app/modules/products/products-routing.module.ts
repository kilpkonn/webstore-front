import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import {DetailComponent} from './components/detail/detail.component';
import {AuthGuard} from '../../shared/helpers/auth.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'new', component: NewProductComponent, canActivate: [AuthGuard] },
  { path: ':id', component: DetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
