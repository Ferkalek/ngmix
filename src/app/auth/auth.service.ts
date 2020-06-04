import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { AuthRepositorySerive } from './auth-repository.service';
import { TOKEN_KEY } from './auth.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private _authRepositorySerive: AuthRepositorySerive,
    private _router: Router
  ) { }

  registration(userData: IAuthReqDTO): Observable<IAuthResDTO> {
    return this._authRepositorySerive.sendRegistrationRequest(userData);
  }

  login(userData: IAuthReqDTO): Observable<ILoginToken> {
    return this._authRepositorySerive.sendLoginRequest(userData);
  }

  getAccessToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  setTokenInLocalStorage(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  logout(): void {
    window.localStorage.clear();
    this._router.navigate(['/auth/login']);
  }
}
