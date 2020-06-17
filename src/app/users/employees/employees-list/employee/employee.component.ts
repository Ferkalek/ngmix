import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEmployeeDTO } from '../../employees.interfase';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  @Input() readonly employee: IEmployeeDTO;

  update(): void {}

  delete(): void {}
}
