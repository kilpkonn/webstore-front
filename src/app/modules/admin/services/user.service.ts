import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user';

@Injectable({providedIn: 'root'})
export class UserService {
  private url = 'api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`/api/users/register`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`/api/users/login`, user);
  }

  changeRole(user: User): Observable<User> {
    return this.http.put<User>('/api/users/role', user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
