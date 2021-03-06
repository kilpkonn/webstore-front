import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from '../models/user';
import {UserService} from '../../modules/admin/services/user.service';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  @Output() getUser: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,
              private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject ? this.currentUserSubject.value : undefined;
  }

  login(username, password) {
    return this.userService.login({username, password} as User)
      .pipe(map((user: User) => {
        // store admin details and jwt token in local storage to keep admin logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.getUser.emit(user);
        return user;
      }));
  }

  logout() {
    // remove admin from local storage and set current admin to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.getUser.emit(null);
  }
}
