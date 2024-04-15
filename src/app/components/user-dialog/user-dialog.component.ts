import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { User } from '../../shared/interfaces';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-detail-dialog',
  templateUrl: './user-dialog.component.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle
  ],
  standalone: true
})
export class UserDialogComponent {
  public userData: User;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: User }) {
    this.userData = data.user;
  }
}
