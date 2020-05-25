import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsersRepositoryService } from './users-repository.service';
import { IUserDTO } from './users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private usersRepositoryService: UsersRepositoryService
  ) { }

  getUsers(): Observable<IUserDTO[]> {
    return this.usersRepositoryService.sendGetUsersRequest()
      .pipe(
        map(users => users.data)
      );
  }
}