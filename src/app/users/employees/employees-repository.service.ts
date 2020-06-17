import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployeeDTO } from './employees.interfase';
import { ReqResApiEndpoint } from 'src/app/shared/req-res-api.enums';

@Injectable({
  providedIn: 'root'
})
export class EmployeesRepositoryService {

  constructor(
    private _http: HttpClient
  ) { }

  sendCreateEemployeeRequest(employeeData: IEmployeeDTO): Observable<IEmployeeDTO> {
    return this._http
      .post<IEmployeeDTO>(`${environment.reqResApiBaseUrl}${environment.reqResApiPrefex}${ReqResApiEndpoint.Users}`, employeeData);
  }
}
