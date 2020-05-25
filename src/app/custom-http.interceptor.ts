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
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.checkToken();

    if (!!token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

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
