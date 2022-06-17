import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { List } from 'immutable';

import { EmployeeData } from '../shared/list-generator.service';
import { fibonacci } from '../shared/fibonacci';
import { CalculatePipeModule } from '../shared/calculate.pipe';

@Component({
  selector: 'slowmo-sales-list',
  templateUrl: './Sales-list.component.html',
  styleUrls: ['./Sales-list.component.scss'],
})
export class SalesListComponent {
  @Input() data: EmployeeData[] | null = null;
  @Input() department = '';

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  label = '';

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    console.log('Sales calculate');
    return fibonacci(num);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    CalculatePipeModule
  ],
  declarations: [SalesListComponent],
  exports: [SalesListComponent],
})
export class SalesListComponentModule {}
