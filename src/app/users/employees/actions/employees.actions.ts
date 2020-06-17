import { IEmployeeDTO } from '../employees.interfase';

export class CreateEmployeeAction {
    static readonly type = '[Employee] Create Employee';

    constructor(public readonly employee: IEmployeeDTO) { }
}

export class DeleteEmployeeAction {
    static readonly type = '[Employee] Delete Employee';

    constructor(public readonly id: string) { }
}
