import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./components/contact.component";


const routes: Routes = [{ path: '', component: ContactComponent , data: {animation: 'isRight'}}];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
