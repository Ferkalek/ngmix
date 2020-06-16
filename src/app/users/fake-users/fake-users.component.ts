import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IFakeUserDTO } from './fake-user.interfase';
import { FakeUsersService } from './fake-users.service';
import { ASubscriptionCollector } from 'src/app/shared/abstract-classes/subscription-collector.abstract-class';

@Component({
  selector: 'app-fake-users',
  templateUrl: './fake-users.component.html',
  styleUrls: ['./fake-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FakeUsersComponent extends ASubscriptionCollector {
  readonly fakeUserForm: FormGroup = this._formBilder.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
    job: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]]
  })

  get name() {
    return this.fakeUserForm.get('name');
  }

  get job() {
    return this.fakeUserForm.get('job');
  }

  constructor(
    private _fakeUserService: FakeUsersService,
    private _formBilder: FormBuilder
  ) {
    super();
   }

  onSubmit(): void {
    if (this.fakeUserForm.invalid) {
      return;
    }

    const { name, job } = this.fakeUserForm.value;
    const fakeUserData: IFakeUserDTO = {
      name,
      job
    };
    
    this._subscriptions.push(
      this._fakeUserService.createFakeUser(fakeUserData).subscribe(d => console.log('.....', d))
    );
  }

}
