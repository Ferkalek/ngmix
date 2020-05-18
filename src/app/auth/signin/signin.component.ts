import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';
import { IAuthReq } from '../auth.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService
  ) { }

  onLogin() {
    if (this.email && this.password) {
      const data: IAuthReq = {
        email: this.email,
        password: this.password
      };

      this.authService.onLogin(data).subscribe(
        response => {
          console.log('Result:', response);
        },
        err => {
          console.log('Error:', err);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    }
  }

}
