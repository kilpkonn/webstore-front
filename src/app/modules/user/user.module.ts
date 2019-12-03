import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import {UserRoutingModule} from './user-routing.module';



@NgModule({
  declarations: [RegisterComponent, UserComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule
  ]
})
export class UserModule { }
