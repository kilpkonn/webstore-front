import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../../../shared/models/loginCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: LoginCredentials): Observable<any> {
    return; // TODO: send login request
  }

  logOut(): Observable<any> {
    return;  // TODO: logout
  }

}
