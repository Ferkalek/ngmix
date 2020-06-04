import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthReqDTO, IAuthResDTO, ILoginToken } from './auth.interface';
import { ReqResApiEndpoint } from '../shared/req-res-api.enums';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthRepositorySerive {
    constructor(
        private _http: HttpClient
    ) { }

    sendRegistrationRequest(userData: IAuthReqDTO): Observable<IAuthResDTO> {
        return this._http.post<IAuthResDTO>(`${environment.reqResApiBaseUrl}${environment.reqResApiPrefex}${ReqResApiEndpoint.Registration}`, userData);
    }

    sendLoginRequest(userData: IAuthReqDTO): Observable<ILoginToken> {
        return this._http.post<ILoginToken>(`${environment.reqResApiBaseUrl}${environment.reqResApiPrefex}${ReqResApiEndpoint.Login}`, userData);
    }
}
