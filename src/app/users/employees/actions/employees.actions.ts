import { IEmployeeDTO } from '../employees.interfase';

export class CreateEmployeeAction {
    static readonly type = '[Employee] Create Employee';

    constructor(public readonly employee: IEmployeeDTO) { }
}
