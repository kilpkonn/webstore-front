import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [RegisterComponent, UserComponent, LoginComponent, RoleFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    FlexModule,
    MatTableModule,
    TranslateModule
  ]
})
export class AdminModule {
}
