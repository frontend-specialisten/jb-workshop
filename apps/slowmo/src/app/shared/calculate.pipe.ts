import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import memo from 'memo-decorator';

import { fibonacci } from './fibonacci';

@Pipe({
  name: 'calculate',
  pure: true
})
export class CalculatePipe implements PipeTransform {
  //@memo()
  transform(value: number): number {
    return fibonacci(value);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [CalculatePipe],
  exports: [CalculatePipe],
})
export class CalculatePipeModule {}
