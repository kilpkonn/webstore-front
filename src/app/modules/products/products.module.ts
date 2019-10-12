import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppMaterialModule } from "../app-material/app-material.module";
import { ListingComponent } from './components/listing/listing.component';


@NgModule({
  declarations: [ProductsComponent, CategoriesComponent, ListingComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule
  ]
})
export class ProductsModule { }
