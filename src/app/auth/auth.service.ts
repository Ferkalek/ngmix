import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { AuthRepositorySerive } from './auth-repository.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLogin$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  token$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private authRepositorySerive: AuthRepositorySerive,
    private router: Router
  ) { }

  registration(userData: IAuthReqDTO): Observable<IAuthResDTO> {
    return this.authRepositorySerive.sendRegistrationRequest(userData);
  }

  login(userData: IAuthReqDTO): Observable<ILoginToken> {
    return this.authRepositorySerive.sendLoginRequest(userData);
  }

  checkLocalStorage(): void {
    const hasToken = window.localStorage.getItem('token');

    if (hasToken) {
      this.setIsLogin(hasToken);
    }
  }

  setLocalStorage(token: string): void {
    window.localStorage.setItem('token', token);
    this.setIsLogin(token);
  }

  clearLocalStorage(): void {
    window.localStorage.clear();
    this.setIsLogin();
  }

  setIsLogin(token?: string): void {
    if (token) {
      this.isLogin$.next(true);
      this.token$.next(token);
    } else {
      this.isLogin$.next(false);
      this.token$.next('');
    }
  }

  logout(): void {
    this.clearLocalStorage();
    this.router.navigate(['/auth/login']);
  }
}