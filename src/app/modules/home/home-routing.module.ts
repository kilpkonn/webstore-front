import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { CreateNewsComponent } from "./components/create-news/create-news.component";

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'isLeft'} },
  { path: 'new', component: CreateNewsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
