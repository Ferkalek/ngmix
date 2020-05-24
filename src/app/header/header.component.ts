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
    private authService: AuthService
  ) { }

  get isLogin(): Observable<boolean> {
    return this.authService.isLogin$;
  }

  logout(): void {
    this.authService.logout();
  }

}
