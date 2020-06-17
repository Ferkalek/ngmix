import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './state/user.state';
import { SharedModule } from '../shared/shared.module';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesState } from './employees/state/employees.state';
import { EmployeeComponent } from './employees/employees-list/employee/employee.component';

@NgModule({
  declarations: [
    UsersListComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([
      UsersState,
      EmployeesState
    ])
  ]
})
export class UsersModule { }
