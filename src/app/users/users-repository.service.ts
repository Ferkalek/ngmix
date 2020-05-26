import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersRepositoryService {
    constructor(
        private _http: HttpClient
    ) { }

    sendGetUsersRequest(): Observable<any> {
        return this._http.get<any>(`https://reqres.in/api/users?page=2`);
    }
}
