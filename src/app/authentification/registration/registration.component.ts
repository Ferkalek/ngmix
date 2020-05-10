import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IAuthReq } from '../auth.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onRegistration() {
    if (this.email && this.password) {
      const data: IAuthReq = {
        email: this.email,
        password: this.password
      };

      this.authService.sendRegistration(data).subscribe(
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
