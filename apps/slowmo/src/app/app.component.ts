import { Component } from '@angular/core';
import { List } from 'immutable';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'slowmo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  salesList: EmployeeData[] = Sales;
  rndList: EmployeeData[] = Rnd;
  label = '';

  constructor(private generator: ListGenerator) {}

  add(list: EmployeeData[], name: unknown) {
    //return list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: unknown) {
    //return list.splice(list.indexOf(node), 1);
  }
}
