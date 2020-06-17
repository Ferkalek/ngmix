import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IUserDTO } from '../users.interface';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { AddUsersAction } from '../actions/user.actions';
import { ASubscriptionCollector } from 'src/app/shared/abstract-classes/subscription-collector.abstract-class';
import { UsersState } from 'src/app/users/state/user.state';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent extends ASubscriptionCollector {
  @Select(UsersState.users) users$: Observable<IUserDTO[]>;
  
  constructor(
    private _usersService: UsersService,
    private _store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this._usersService.getUsers()
        .subscribe(users => this._store.dispatch(new AddUsersAction(users)))
    );
  }
}
