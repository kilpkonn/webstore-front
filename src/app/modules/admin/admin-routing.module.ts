import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {UserComponent} from './components/user.component';
import {AuthGuard} from '../../shared/helpers/auth.guard';


const routes: Routes = [
  {path: '', component: UserComponent, canActivate: [AuthGuard], data: {animation: 'isRight'}},
  {path: 'login', component: LoginComponent, data: {animation: 'isLeft'}},
  {path: 'register', component: RegisterComponent, data: {animation: 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
