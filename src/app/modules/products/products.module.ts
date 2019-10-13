import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AppMaterialModule } from "../app-material/app-material.module";
import { ListingComponent } from './components/listing/listing.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [ProductsComponent, CategoriesComponent, ListingComponent, NewProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class ProductsModule { }
