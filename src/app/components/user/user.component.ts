import { Component } from '@angular/core';
// Custom path mapping
import { UserFacade } from '@services/userFacade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { User } from '../../shared/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    MatCard,
    NgForOf,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
    MatProgressSpinner
  ],
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public users: User[] = [];
  public isLoading = true;

  constructor(private userFacade: UserFacade, public dialog: MatDialog) {
    this.userFacade.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
      this.isLoading = false;
    });
  }

  openDialog(user: User): void {
    this.dialog.open(UserDialogComponent, {
      data: { user: user }
    });
  }
}
