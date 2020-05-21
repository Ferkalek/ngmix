import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
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