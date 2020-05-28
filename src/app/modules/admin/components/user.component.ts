import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../../shared/models/user';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];
  displayedColumns: string[] = ['id', 'username', 'roleName'];
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  dataSource = new MatTableDataSource(this.users);

  constructor(private userService: UserService,
              private dialog: MatDialog,
              private authenticationService: AuthenticationService
  ) {
    this.user = authenticationService.currentUserValue;
    authenticationService.getUser.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.getUsers();
    if (this.user.role === 'ADMIN') {
      this.displayedColumns = ['id', 'username', 'roleForm', 'delete'];
    }
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.dataSource.data = this.users;
      });
  }

  deleteUser(user: User): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = `Are you sure you want to delete user "${ user.username }" ?`;

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user.id)
          .subscribe(data => {
            this.users.splice(this.users.indexOf(user), 1);
            this.dataSource.data = this.users;
          }, error => console.log(error));
      }
      this.dialogRef = null;
    });
  }

}
