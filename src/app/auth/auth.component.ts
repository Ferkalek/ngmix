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

  email: string = '';
  password: string = '';
  isLoginPage: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoginPage = this.router.routerState.snapshot.url === AUTH_PATH.Login;
  }

  login(): void {
    if (!this.email || !this.password) {
      return;
    }

    const data: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe();

    this.clear();
  }

  registration(): void {
    if (!this.email || !this.password) {
      return;
    }

    const data: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this.authService.registration(data).subscribe();

    this.clear();
  }

  clear(): void {
    this.email = '';
    this.password = '';
  }

}
