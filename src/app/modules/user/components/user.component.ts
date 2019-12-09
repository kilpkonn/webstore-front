import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  roles:string[] = ["UNVERIFIED", "USER", "ADMIN"];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  updateUser(user: User) {
    // this.userService.changeRole
  }

}
