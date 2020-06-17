import { IEmployeeDTO } from '../employees.interfase';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CreateEmployeeAction } from '../actions/employees.actions';

export class EmployeeStateModel {
    employees: IEmployeeDTO[];
}

@State<EmployeeStateModel>({
    name: 'employees',
    defaults: {
        employees: []
    }
})
@Injectable()
export class EmployeesState {
    @Selector()
    static employees(state: EmployeeStateModel): IEmployeeDTO[] {
        return state.employees;
    }

    @Action(CreateEmployeeAction)
    addUsers({getState, setState }: StateContext<EmployeeStateModel>, { employee }: CreateEmployeeAction) {
        const state = getState();
        setState({
            employees: [...state.employees, {...employee}]
        })
    }
}
