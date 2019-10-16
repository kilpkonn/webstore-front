import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsComponentComponent } from './components/news-component/news-component.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [HomeComponent, NewsComponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class HomeModule { }
