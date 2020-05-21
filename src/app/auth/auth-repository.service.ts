import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { AUTH_URLS } from './auth.constants';

@Injectable({
    providedIn: 'root',
})
export class AuthRepositorySerive {
    constructor(
        private http: HttpClient
    ) { }

    sendRegistrationRequest(userData: IAuthReqDTO): Observable<IAuthResDTO> {
        return this.http.post<IAuthResDTO>(AUTH_URLS.Registration, userData);
    }

    sendLoginRequest(userData: IAuthReqDTO): Observable<ILoginToken> {
        return this.http.post<ILoginToken>(AUTH_URLS.Login, userData);
    }
}
