import { IUserDTO } from '../users.interface';

export class AddUsersAction {
    static readonly type = '[Users] Add Users';

    constructor(public readonly users: IUserDTO[]) { }
}
