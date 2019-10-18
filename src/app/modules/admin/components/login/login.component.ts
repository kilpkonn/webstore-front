import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../../../shared/models/loginCredentials';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credentials = new LoginCredentials();
  private submitted = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  postLogin() {
    this.loginService.login(this.credentials)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    if (!this.isValidCredentials(this.credentials)) {
      // TODO: Display error
      return;
    }

    // TODO: Encrypt password
    this.submitted = true;
    this.postLogin();
  }

  private isValidCredentials(news: LoginCredentials) {
    return typeof news.username !== 'undefined'
      && news.username !== ''
      && typeof news.password !== 'undefined'
      && news.password !== '';
  }

}
