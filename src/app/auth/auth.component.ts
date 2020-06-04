import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { IAuthReqDTO } from './auth.interface';
import { AuthService } from './auth.service';
import { AuthPath } from './auth.constants';
import { ASubscriptionCollector } from '../shared/abstract-classes/subscription-collector.abstract-class';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent extends ASubscriptionCollector implements OnInit {
  email: string = '';
  password: string = '';
  isLoginPage: boolean = false;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.isLoginPage = this._router.routerState.snapshot.url === AuthPath.Login;
  }

  login(): void {
    if (!this.email || !this.password) {
      return;
    }

    const data: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this._subscriptions.push(
      this._authService.login(data)
        .subscribe(result => {
          this._authService.setTokenInLocalStorage(result.token);
          this._router.navigate(['/']);
        })
    );

    this.clear();
  }

  registration(): void {
    if (!this.email || !this.password) {
      return;
    }

    const userData: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this._subscriptions.push(
      this._authService.registration(userData)
        .subscribe(result => {
          this._router.navigate(['/auth/login']);
        })
    );

    this.clear();
  }

  clear(): void {
    this.email = '';
    this.password = '';
  }
}
