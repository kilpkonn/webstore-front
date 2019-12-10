import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../../../shared/models/user';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];
  displayedColumns: string[] = ['username', 'roleName'];

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService) {
    this.user = authenticationService.currentUserValue;
    authenticationService.getUser.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.getUsers();
    if (this.user.role === 'ADMIN') {
      this.displayedColumns = ['username', 'roleForm'];
    }
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
