import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IAuthReq } from '../auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
        (val) => {
            console.log("POST call successful value returned in body",
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }
  }

}
