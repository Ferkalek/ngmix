import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { IUserDTO } from '../users/users.interface';
import { AddUserAction } from '../actions/user.actions';

@State<IUserDTO[]>({
    name: 'users',
    defaults: []
})
@Injectable()
export class UserState {
    users: IUserDTO[];
}
