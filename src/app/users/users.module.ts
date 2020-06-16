import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './state/user.state';
import { SharedModule } from '../shared/shared.module';
import { FakeUsersComponent } from './fake-users/fake-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent,
    FakeUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([
      UsersState
    ])
  ]
})
export class UsersModule { }
