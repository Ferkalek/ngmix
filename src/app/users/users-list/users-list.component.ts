import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { IUserDTO } from '../users.interface';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { AddUserAction } from '../../actions/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  users$: Observable<IUserDTO[]>;
  
  constructor(
    private _usersService: UsersService,
    private store: Store
  ) {
    this.users$ = this.store.select(state => state.users.users)
  }

  ngOnInit(): void {
      this._usersService.getUsers()
        .subscribe(users => {
          users.forEach(user => this.addUser(user))
        })
  }

  addUser(user: IUserDTO): void {
    this.store.dispatch(new AddUserAction(user));
  }
}
