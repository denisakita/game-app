import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByGemCount',
  standalone: true
})
export class SortByGemCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
