import { IUserDTO } from '../users/users.interface';

export class AddUserAction {
    static readonly type = '[Users] Add Users';

    constructor(public readonly payload: IUserDTO[]) { }
}
