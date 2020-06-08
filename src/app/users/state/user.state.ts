import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IUserDTO } from '../users.interface';
import { AddUsersAction } from '../actions/user.actions';

export class UsersStateModel {
    users: IUserDTO[];
}
@State<UsersStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
@Injectable()
export class UsersState {
    @Selector()
    static users(state: UsersStateModel): IUserDTO[] {
        return state.users;
    }

    @Action(AddUsersAction)
    addUsers({getState, setState }: StateContext<UsersStateModel>, { users }: AddUsersAction) {
        const state = getState();
        setState({
            users: [...state.users, ...users]
        })
    }
}
