import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact.component';
import { MapComponent } from './components/map/map.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ContactComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  providers: []
})
export class ContactModule {
}
