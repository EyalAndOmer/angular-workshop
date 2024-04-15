import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, username: string, password: string): Observable<any> {
    return this.http.post('/api/register', {firstName, lastName, username, password});
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/login', {username, password});
  }

  logout(): void {
    // handle logout
  }
}
