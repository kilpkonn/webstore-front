import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) {
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
