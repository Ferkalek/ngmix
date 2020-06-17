import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EmployeesState } from '../state/employees.state';
import { IEmployeeDTO } from '../employees.interfase';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent {
  @Select(EmployeesState.employees) readonly employees$: Observable<IEmployeeDTO[]>;
}
