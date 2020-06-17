import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IFakeUserDTO } from '../../fake-user.interfase';

@Component({
  selector: 'app-fake-user',
  templateUrl: './fake-user.component.html',
  styleUrls: ['./fake-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FakeUserComponent {
  @Input() readonly fakeUser: IFakeUserDTO;

  update(): void {}

  delete(): void {}
}
