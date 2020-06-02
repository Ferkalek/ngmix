import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IUserDTO } from '../users.interface';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { AddUserAction } from '../../actions/user.actions';
import { withLatestFrom } from 'rxjs/operators';

// https://www.youtube.com/watch?v=SfiO3bDUK7Q&t=691s

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  // users$: Observable<IUserDTO[]>;
  // private _users$: BehaviorSubject<IUserDTO[]> = new BehaviorSubject([]);
  // private _subscriptions: Subscription[] = [];

  @Select(state => state.users) users$: Observable<IUserDTO[]>;
  
  constructor(
    private _usersService: UsersService,
    private store: Store
  ) {
    // this.users$ = this._users$.asObservable();
  }

  ngOnInit(): void {
    // this._subscriptions.push(
    //   this._usersService.getUsers()
    //     .subscribe(users => this._users$.next(users))
    // );
  }

  addUser(user: IUserDTO): void {
    this.store.dispatch(new AddUserAction(user))
      .pipe(withLatestFrom(this.users$))
      .subscribe(([_, users]) => {
        console.log('-- 1 --', _);
        console.log('-- 2 --', users);
        // do any logic after add new user to store
      });
  }
}
