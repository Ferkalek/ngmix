import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthReq, IAuthRes, ILoginToken } from './auth.interface';
import { AUTH_URLS } from './auth.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  sendRegistration(userData: IAuthReq): Observable<IAuthRes> {
    return this.http.post<IAuthRes>(AUTH_URLS.registration,
      {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    );
  }

  onLogin(userData: IAuthReq): Observable<ILoginToken> {
    return this.http.post<ILoginToken>(AUTH_URLS.login, {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
  }
}