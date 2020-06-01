import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IUserDTO } from '../users.interface';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  users$: Observable<IUserDTO[]>;
  private _users$: BehaviorSubject<IUserDTO[]> = new BehaviorSubject([]);
  private _subscriptions: Subscription[] = [];

  constructor(
    private _usersService: UsersService
  ) {
    this.users$ = this._users$.asObservable();
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this._usersService.getUsers()
        .subscribe(users => this._users$.next(users))
    );
  }
}
