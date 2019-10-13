import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppMaterialModule } from "../modules/app-material/app-material.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
