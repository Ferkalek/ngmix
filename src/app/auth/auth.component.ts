import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { IAuthReqDTO } from './auth.interface';
import { AuthService } from './auth.service';
import { AUTH_PATH, ERRORS, HINTS } from './auth.constants';

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
  hint$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoginPage = this.router.routerState.snapshot.url === AUTH_PATH.login;
  }

  login(): void {
    if (!this.email || !this.password) {
      return;
    }

    const data: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe(
      result => {},
      err => {
        if (err.status === 400 && err.error.error === ERRORS.login) {
          this.hint$.next(HINTS.login)
        }
      }
    );

    this.clear();
    this.closeHint();
  }

  registration(): void {
    if (!this.email || !this.password) {
      return;
    }

    const data: IAuthReqDTO = {
      email: this.email,
      password: this.password
    };

    this.authService.registration(data).subscribe(
      result => {},
      err => {
        if (err.status === 400 && err.error.error === ERRORS.registration) {
          this.hint$.next(HINTS.registration)
        }
      }
    );

    this.clear();
  }

  clear(): void {
    this.email = '';
    this.password = '';
  }

  closeHint(): void {
    this.hint$.next('');
  }

}
