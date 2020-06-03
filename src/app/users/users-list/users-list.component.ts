import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IUserDTO } from '../users.interface';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { AddUserAction } from '../../actions/user.actions';
import { ASubscriptionCollector } from 'src/app/shared/abstract-classes/subscription-collector.abstract-class';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent extends ASubscriptionCollector {
  // readonly users$: Observable<IUserDTO[]>; // ???
  @Select(state => state.users.users) users$: Observable<any>;
  
  constructor(
    private _usersService: UsersService,
    private _store: Store
  ) {
    super();
    // this.users$ = this._store.select(state => state.users.users);
  }

  ngOnInit(): void {
      this._usersService.getUsers()
        .subscribe(users => this._store.dispatch(new AddUserAction(users)))
  }
}
