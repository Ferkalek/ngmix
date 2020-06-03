import { IUserDTO } from '../users/users.interface';

export class AddUserAction {
    static readonly type = '[User API] Add User';

    constructor(public payload: IUserDTO) { }
}