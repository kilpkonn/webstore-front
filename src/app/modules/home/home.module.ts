import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { AppMaterialModule } from "../app-material/app-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NewsComponentComponent } from './components/news-component/news-component.component';


@NgModule({
  declarations: [HomeComponent, NewsComponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
