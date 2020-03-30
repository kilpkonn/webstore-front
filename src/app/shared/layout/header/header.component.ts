import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, private dialog: MatDialog,
              private authenticationService: AuthenticationService) {
    this.user = authenticationService.currentUserValue;
    authenticationService.getUser.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/admin/login']);
  }

  openConfirmationDialog() {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to log out?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
      this.dialogRef = null;
    });
  }
}
