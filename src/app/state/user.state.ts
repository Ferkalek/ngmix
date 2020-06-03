import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IUserDTO } from '../users/users.interface';
import { AddUserAction } from '../actions/user.actions';

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
    static users(state: UsersStateModel) {
        return state.users;
    }

    @Action(AddUserAction)
    add({getState, patchState }: StateContext<UsersStateModel>, { payload }: AddUserAction) {
        const state = getState();
        patchState({
            users: [...state.users, ...payload]
        })
    }
}
