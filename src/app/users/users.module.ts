import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateComponent } from './users-list/create/create.component';
import { ReadComponent } from './users-list/read/read.component';

@NgModule({
  declarations: [
    UsersListComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
