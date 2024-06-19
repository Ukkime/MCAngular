import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasecustom'
})
export class UppercaseCustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toString().toUpperCase();
  }

}
