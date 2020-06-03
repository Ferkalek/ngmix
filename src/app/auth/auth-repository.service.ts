import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { Api } from '../shared/api-urls.constants';

@Injectable({
    providedIn: 'root',
})
export class AuthRepositorySerive {
    constructor(
        private _http: HttpClient
    ) { }

    sendRegistrationRequest(userData: IAuthReqDTO): Observable<IAuthResDTO> {
        return this._http.post<IAuthResDTO>(Api.Registration, userData);
    }

    sendLoginRequest(userData: IAuthReqDTO): Observable<ILoginToken> {
        return this._http.post<ILoginToken>(Api.Login, userData);
    }
}
