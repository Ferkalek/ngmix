import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { FakeUserState } from '../state/fake-user.state';
import { Observable } from 'rxjs';
import { IFakeUserDTO } from '../fake-user.interfase';

@Component({
  selector: 'app-fake-users-list',
  templateUrl: './fake-users-list.component.html',
  styleUrls: ['./fake-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FakeUsersListComponent {
  @Select(FakeUserState.fakeUsers) fakeUsers$: Observable<IFakeUserDTO[]>;
}
