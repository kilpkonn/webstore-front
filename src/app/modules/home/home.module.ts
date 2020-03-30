import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { NewsComponentComponent } from './components/news-component/news-component.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent, NewsComponentComponent, CreateNewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    TranslateModule,
  ]
})
export class HomeModule { }
