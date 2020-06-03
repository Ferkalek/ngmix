import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  canActivate(): boolean {
    const token = this._authService.getAccessToken();

    if (token !== null) {
      return true;
    }

    this._router.navigate(['/auth/login']);
    return false;
  }
}
