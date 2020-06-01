import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUserDTO } from './users.interface';
import { UsersRepositoryService } from './users-repository.service';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(
        private _usersRepositoryService: UsersRepositoryService
    ) { }

    getUsers(): Observable<IUserDTO[]> {
        return this._usersRepositoryService.sendGetUsersRequest()
            .pipe(
                map(dataUsers => dataUsers.data)
            );
    }
}