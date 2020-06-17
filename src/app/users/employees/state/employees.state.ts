import { IEmployeeDTO } from '../employees.interfase';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CreateEmployeeAction, DeleteEmployeeAction } from '../actions/employees.actions';

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
    createEmployee({getState, setState }: StateContext<EmployeeStateModel>, { employee }: CreateEmployeeAction) {
        const state = getState();
        setState({
            employees: [...state.employees, {...employee}]
        })
    }

    @Action(DeleteEmployeeAction)
    deleteEmployee({getState, setState }: StateContext<EmployeeStateModel>, { id }: DeleteEmployeeAction) {
        const state = getState();
        setState({
            employees: state.employees.filter(employee => employee.id !== id)
        })
    }
}
