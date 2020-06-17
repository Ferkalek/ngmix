import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEmployeeDTO } from '../../employees.interfase';
import { EmployeesService } from '../../employees.service';
import { ASubscriptionCollector } from 'src/app/shared/abstract-classes/subscription-collector.abstract-class';
import { Store } from '@ngxs/store';
import { DeleteEmployeeAction } from '../../actions/employees.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent extends ASubscriptionCollector {
  @Input() readonly employee: IEmployeeDTO;

  constructor(
    private _employeesService: EmployeesService,
    private _store: Store
  ) {
    super();
  }

  update(): void {}

  delete(id: string): void {
    this._subscriptions.push(
      this._employeesService.deleteEmployee(id)
        .subscribe(() => this._store.dispatch(new DeleteEmployeeAction(id)))
    );
  }
}
