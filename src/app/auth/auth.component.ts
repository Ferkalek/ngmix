import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
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
export class AuthComponent extends ASubscriptionCollector implements OnInit {
  readonly authForm: FormGroup = this._formBilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  get isLoginPage(): boolean {
    return this._router.routerState.snapshot.url === AuthPath.Login
  };

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }
 
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('---', this.authForm);
    if (this.authForm.invalid) {
      return;
    }

    const { email, password } = this.authForm.value;
    const userData: IAuthReqDTO = {
      email,
      password
    };

    if (this.isLoginPage) {
      this._login(userData);
    } else {
      this._registration(userData);
    }
  }

  private _login(userData: IAuthReqDTO): void {
    this._subscriptions.push(
      this._authService.login(userData)
        .subscribe(result => this._finalizeAuthProces(result.token))
    );
  }

  private _registration(userData: IAuthReqDTO): void {
    this._subscriptions.push(
      this._authService.registration(userData)
        .subscribe(result => this._finalizeAuthProces(result.token))
    );
  }

  private _finalizeAuthProces(token: string): void {
    this._authService.setTokenInLocalStorage(token);
    this._router.navigate(['/']).then(() => this.authForm.reset());
  }
}
