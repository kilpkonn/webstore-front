import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [LoginComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
