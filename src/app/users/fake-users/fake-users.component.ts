import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { IFakeUserDTO } from './fake-user.interfase';
import { FakeUsersService } from './fake-users.service';
import { ASubscriptionCollector } from 'src/app/shared/abstract-classes/subscription-collector.abstract-class';
import { CreateFakeUserAction } from './actions/fake-user.actions';

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

  @ViewChild('form') form: NgForm;

  get name() {
    return this.fakeUserForm.get('name');
  }

  get job() {
    return this.fakeUserForm.get('job');
  }

  constructor(
    private _fakeUserService: FakeUsersService,
    private _formBilder: FormBuilder,
    private _store: Store
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
      this._fakeUserService.createFakeUser(fakeUserData)
        .subscribe(fakeUser => {
          this._store.dispatch(new CreateFakeUserAction(fakeUser));
          // reset form but showing errors after reseting 
          // this.fakeUserForm.reset();

          // reset form and set unsubmitted status 
          // that helping to get rid of highlighted mat-form-field
          // attention: need add ViewChild and add it in template
          this.form.resetForm();
        })
    );
  }
}
