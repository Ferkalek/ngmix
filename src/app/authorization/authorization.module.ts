import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

import { AuthorizationRoutingModule } from './authorization-routing.module';
// import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

NgModule({
    declarations: [
        // RegistrationComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthorizationRoutingModule,
        // HttpClientModule,
        // FormsModule,
        // BrowserAnimationsModule,
        // MatInputModule,
        // MatCardModule,
        // MatButtonModule,
    ]
})
export class AuthorizationModule {}
