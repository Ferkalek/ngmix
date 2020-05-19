import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthReqDTO } from './auth.interface';
import { AuthService } from './auth.service';
import { AUTH_PATH } from './auth.constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  email = '';
  password = '';
  isLoginPage = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoginPage = this.router.routerState.snapshot.url === AUTH_PATH.login;
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }

    // const data: IAuthReqDTO = {
    //   email: this.email,
    //   password: this.password
    // };

    const data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }

    this.authService.login(data).subscribe(
      response => {
        console.log('Result:', response);
      },
      err => {
        console.log('Error:', err);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

    this.clear();
  }

  registration() {
    if (!this.email || !this.password) {
      return;
    }

    // const data: IAuthReqDTO = {
    //   email: this.email,
    //   password: this.password
    // };

    const data = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    }

    this.authService.registration(data).subscribe(
      response => {
        console.log('Result:', response);
      },
      err => {
        console.log('Error:', err);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

    this.clear();
  }

  clear() {
    this.email = '';
    this.password = '';
  }

}
