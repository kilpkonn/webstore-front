import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {User} from '../../../../shared/models/user';
import {AuthenticationService} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'products-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  user: User;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private authenticationService: AuthenticationService) {
    this.matIconRegistry.addSvgIcon(
      'add_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/add_circle.svg')
    );
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
