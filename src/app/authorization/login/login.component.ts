import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';
import { IAuthReq } from '../auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

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
