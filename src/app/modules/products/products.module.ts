import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ListingComponent } from './components/listing/listing.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ProductsComponent, ToolbarComponent, ListingComponent, NewProductComponent, AddProductComponent, DetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule
  ]
})
export class ProductsModule { }
