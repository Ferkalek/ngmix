import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserPageDTO } from './users.interface';
import { Api } from '../shared/api-urls.constants';

@Injectable({
    providedIn: 'root',
})
export class UsersRepositoryService {
    constructor(
        private _http: HttpClient
    ) { }

    sendGetUsersRequest(page: string = '2'): Observable<IUserPageDTO> {
        let params = new HttpParams();
        params.append(Api.PageParam, page); // does not work
        // TODO add a pagination
        return this._http.get<IUserPageDTO>(Api.Users, { params });
    }
}
