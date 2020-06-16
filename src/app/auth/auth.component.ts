import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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
export class AuthComponent extends ASubscriptionCollector {
  readonly authForm: FormGroup = this._formBilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  get isLoginPage(): boolean {
    return this._router.routerState.snapshot.url === AuthPath.Login
  };
 
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBilder: FormBuilder
  ) {
    super();
  }

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    const { email, password } = this.authForm.value;
    const userData: IAuthReqDTO = {
      email,
      password
    };

    if (this.isLoginPage) {
      this.login(userData);
    } else {
      this.registration(userData);
    }
  }

  login(userData: IAuthReqDTO): void {
    this._subscriptions.push(
      this._authService.login(userData)
        .subscribe(result => {
          this._authService.setTokenInLocalStorage(result.token);
          this._router.navigate(['/']).then(() => this.clear());
        })
    );
  }

  registration(userData: IAuthReqDTO): void {
    this._subscriptions.push(
      this._authService.registration(userData)
        .subscribe(result => {
          this._router.navigate(['/auth/login']).then(() => this.clear());
          this.clear();
        })
    );
  }

  clear(): void {
    this.authForm.reset();
  }
}
