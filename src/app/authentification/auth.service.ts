import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthReq, IAuthRes, ILoginToken } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  sendRegistration(userData: IAuthReq): Observable<IAuthRes> {
    console.log('.... sendRegistration', userData);

    return this.http.post<IAuthRes>('https://reqres.in/api/register',
      {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    );
  }

  onLogin(userData: IAuthReq): Observable<ILoginToken> {
    console.log('.... onLogin', userData);

    return this.http.post<ILoginToken>('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
  }


}
