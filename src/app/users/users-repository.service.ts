import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserPageDTO } from './users.interface';
import { ReqResApiEndpoint, ReqResApiHttpParamKey } from '../shared/req-res-api.enums';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UsersRepositoryService {
    constructor(
        private _http: HttpClient
    ) { }

    sendGetUsersRequest(page: string = '2'): Observable<IUserPageDTO> {
        return this._http.get<IUserPageDTO>(
            `${environment.reqResApiBaseUrl}${environment.reqResApiPrefex}${ReqResApiEndpoint.Users}`, {
                params: new HttpParams().append(ReqResApiHttpParamKey.Page, page)
            }
        );
    }
}
