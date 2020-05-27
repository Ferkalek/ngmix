import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._authService.getAccessToken();

    if (!!!token) {
      return;
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(`Error:${request.url}`);
          return throwError(error);
        }),

        // request tracing
        finalize(() => console.log(`${request.method}: ${request.urlWithParams}`))
      );
  }
}
