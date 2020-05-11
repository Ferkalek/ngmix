import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://reqres.in/api/';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}users?page=2`);
  }
}
