import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFakeUserDTO } from './fake-user.interfase';
import { ReqResApiEndpoint } from 'src/app/shared/req-res-api.enums';

@Injectable({
  providedIn: 'root'
})
export class FakeUsersRepositoryService {

  constructor(
    private _http: HttpClient
  ) { }

  sendCreateFakeUserRequest(fakeUserData: IFakeUserDTO): Observable<IFakeUserDTO> {
    return this._http
      .post<IFakeUserDTO>(`${environment.reqResApiBaseUrl}${environment.reqResApiPrefex}${ReqResApiEndpoint.Users}`, fakeUserData);
  }
}
