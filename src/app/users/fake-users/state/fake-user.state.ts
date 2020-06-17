import { IFakeUserDTO } from '../fake-user.interfase';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CreateFakeUserAction } from '../actions/fake-user.actions';

export class FakeUserStateModel {
    fakeUsers: IFakeUserDTO[];
}

@State<FakeUserStateModel>({
    name: 'fakeUsers',
    defaults: {
        fakeUsers: []
    }
})
@Injectable()
export class FakeUserState {
    @Selector()
    static fakeUsers(state: FakeUserStateModel): IFakeUserDTO[] {
        return state.fakeUsers;
    }

    @Action(CreateFakeUserAction)
    addUsers({getState, setState }: StateContext<FakeUserStateModel>, { fakeUser }: CreateFakeUserAction) {
        const state = getState();
        setState({
            fakeUsers: [...state.fakeUsers, {...fakeUser}]
        })
    }
}
