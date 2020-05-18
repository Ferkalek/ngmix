import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';
import { IAuthReq } from '../auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService
  ) { }

  onRegistration() {
    if (this.email && this.password) {
      const data: IAuthReq = {
        email: this.email,
        password: this.password
      };

      this.authService.sendRegistration(data).subscribe(
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
