import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { 
  constructor(
    private _authService: AuthService
  ) { }

  get isLogedin(): boolean {
    return !!this._authService.checkToken();
  }

  logout(): void {
    this._authService.logout();
  }
}
