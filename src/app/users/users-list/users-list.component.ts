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

  subscriptions: Subscription[] = [];
  users$$: Observable<IUserDTO[]>;
  private users$: BehaviorSubject<IUserDTO[]> = new BehaviorSubject([]);

  constructor(
    private usersService: UsersService
  ) {
    this.users$$ = this.users$.asObservable();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.usersService.getUsers()
        .subscribe(users => this.users$.next(users))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
