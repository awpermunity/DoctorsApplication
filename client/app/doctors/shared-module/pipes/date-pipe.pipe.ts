import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date-pipe'
})
export class CityShortcutPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.charAt(0) + '.';
  }

}
