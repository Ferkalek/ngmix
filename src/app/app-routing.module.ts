import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { RegistrationComponent } from './authorization/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth/registration',
    component: RegistrationComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { path: '**', component: NotFoundPageComponent }
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
