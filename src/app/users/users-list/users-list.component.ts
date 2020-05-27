import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

import { UsersService } from '../users.service';
import { IUserDTO } from '../users.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnDestroy { 

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

  ngOnDestroy(): void {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

}
