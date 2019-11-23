import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { SidenavListComponent } from './layout/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, DeleteButtonComponent, SidenavListComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    DeleteButtonComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    FlexModule,
    ExtendedModule,
  ]
})
export class SharedModule { }
