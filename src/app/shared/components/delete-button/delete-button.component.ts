import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
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
