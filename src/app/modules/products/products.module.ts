import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppMaterialModule } from "../app-material/app-material.module";


@NgModule({
  declarations: [ProductsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule
  ]
})
export class ProductsModule { }
