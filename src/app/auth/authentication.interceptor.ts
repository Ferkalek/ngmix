import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

enum Interceptor {
  Authorization = 'Authorization',
  Bearer = 'Bearer'
}

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._authService.getAccessToken();

    if (!token) {
      return;
    }

    request = request.clone({
      setHeaders: {
        [Interceptor.Authorization]: `${Interceptor.Bearer} ${token}`
      }
    });

    return next.handle(request);
  }
}
