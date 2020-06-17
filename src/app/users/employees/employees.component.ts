import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { IEmployeeDTO } from './employees.interfase';
import { EmployeesService } from './employees.service';
import { ASubscriptionCollector } from 'src/app/shared/abstract-classes/subscription-collector.abstract-class';
import { CreateEmployeeAction } from './actions/employees.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent extends ASubscriptionCollector {
  readonly employeeForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
    job: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]]
  })

  @ViewChild('form') form: NgForm;

  get name() {
    return this.employeeForm.get('name');
  }

  get job() {
    return this.employeeForm.get('job');
  }

  constructor(
    private _employeeService: EmployeesService,
    private _formBuilder: FormBuilder,
    private _store: Store
  ) {
    super();
   }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      return;
    }

    const { name, job } = this.employeeForm.value;
    const employeeData: IEmployeeDTO = {
      name,
      job
    };
    
    this._subscriptions.push(
      this._employeeService.createEmployee(employeeData)
        .subscribe(employee => {
          this._store.dispatch(new CreateEmployeeAction(employee));
          // reset form but showing errors after reseting 
          // this.employeeForm.reset();

          // reset form and set unsubmitted status 
          // that helping to get rid of highlighted mat-form-field
          // attention: need add ViewChild and add it in template
          this.form.resetForm();
        })
    );
  }
}
