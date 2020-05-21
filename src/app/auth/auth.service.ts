import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { AUTH_URLS } from './auth.constants';
import { AuthRepositorySerive } from './auth-repository.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private authRepositorySerive: AuthRepositorySerive
  ) { }

  registration(userData: IAuthReqDTO): Observable<IAuthResDTO> {
    return this.authRepositorySerive.sendRegistrationRequest(userData);
  }

  login(userData: IAuthReqDTO): Observable<ILoginToken> {
    return this.authRepositorySerive.sendLoginRequest(userData);
  }
}