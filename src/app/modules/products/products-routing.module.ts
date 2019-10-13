import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products.component';
import { NewProductComponent } from "./components/new-product/new-product.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'new', component: NewProductComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
