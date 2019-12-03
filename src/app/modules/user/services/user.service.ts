import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`/api/users/register`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`/api/users/login`, user);
  }
}
