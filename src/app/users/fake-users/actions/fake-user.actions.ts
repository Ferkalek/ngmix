import { IFakeUserDTO } from '../fake-user.interfase';

export class CreateFakeUserAction {
    static readonly type = '[Fake user] Create FakeUser';

    constructor(public readonly fakeUser: IFakeUserDTO) { }
}
