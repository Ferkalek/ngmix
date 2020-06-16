import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeUsersRepositoryService } from './fake-users-repositoryservice';
import { IFakeUserDTO } from './fake-user.interfase';

@Injectable({
  providedIn: 'root'
})
export class FakeUsersService {

  constructor(
    private _fakeUsersRepositoryService: FakeUsersRepositoryService
  ) { }

  createFakeUser(fakeUserData: IFakeUserDTO): Observable<IFakeUserDTO> {
    return this._fakeUsersRepositoryService.sendCreateFakeUserRequest(fakeUserData);
  }
}
