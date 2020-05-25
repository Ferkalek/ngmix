import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { AuthRepositorySerive } from './auth-repository.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

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

  checkToken(): string | null {
    return window.localStorage.getItem('token');
  }

  setTokenInLocalStorage(token: string): void {
    window.localStorage.setItem('token', token);
  }

  logout(): void {
    window.localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}