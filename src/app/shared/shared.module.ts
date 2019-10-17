import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, DeleteButtonComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    DeleteButtonComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
