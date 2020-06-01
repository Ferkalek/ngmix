import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsersDTO } from './users.interface';

const BASE_URL = 'https://reqres.in/api/users';

@Injectable({
    providedIn: 'root',
})
export class UsersRepositoryService {
    constructor(
        private _http: HttpClient
    ) { }

    sendGetUsersRequest(): Observable<IUsersDTO> {
        return this._http.get<IUsersDTO>(`${BASE_URL}?page=2`);
    }
}