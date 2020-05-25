import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IAuthReqDTO } from './auth.interface';
import { AuthService } from './auth.service';
import { AUTH_PATH } from './auth.constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {

  email: string = '';
  password: string = '';
  isLoginPage: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoginPage = this.router.routerState.snapshot.url === AUTH_PATH.Login;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  login(): void {
    if (!this.email || !this.password) {
      return;
    }

    const data: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this.subscriptions.push(
      this.authService.login(data)
        .subscribe(result => {
          if (result) {
            this.authService.setTokenInLocalStorage(result.token);
            this.router.navigate(['/']);
          }
        })
    );

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
    this.subscriptions.push(
      this.authService.registration(data)
        .subscribe(result => {
          if (result) {
            this.router.navigate(['/auth/login']);
          }
        })
    );

    this.clear();
  }

  clear(): void {
    this.email = '';
    this.password = '';
  }

}
