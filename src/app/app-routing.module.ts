import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { RegistrationComponent } from './authentification/registration/registration.component';
import { LoginComponent } from './authentification/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'posts/post-create', component: PostCreateComponent },
  { path: 'auth/registration', component: RegistrationComponent },
  { path: 'auth/login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
