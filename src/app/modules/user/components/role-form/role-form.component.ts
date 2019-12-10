import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  roles: string[] = ['UNVERIFIED', 'USER', 'ADMIN'];
  @Input() rowUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.changeRole(this.rowUser)
      .subscribe(data => console.log(data), error => console.log(error));
  }


}
