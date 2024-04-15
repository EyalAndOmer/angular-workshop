import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  constructor(private userService: UserService) { }

  getUsers(): Observable<User[]> {
    return this.userService.getUsers();
  }
}
