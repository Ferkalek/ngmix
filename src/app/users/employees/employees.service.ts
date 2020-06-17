import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesRepositoryService } from './employees-repository.service';
import { IEmployeeDTO } from './employees.interfase';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private _employeesRepositoryService: EmployeesRepositoryService
  ) { }

  createEmployee(employeeData: IEmployeeDTO): Observable<IEmployeeDTO> {
    return this._employeesRepositoryService.sendCreateEemployeeRequest(employeeData);
  }

  deleteEmployee(id: string): Observable<null> {
    return this._employeesRepositoryService.sendDeleteEemployeeRequest(id);
  }
}
