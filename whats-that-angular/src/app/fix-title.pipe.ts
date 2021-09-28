import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixTitle',
})
export class FixTitlePipe implements PipeTransform {
  transform(value: string): string {
    console.log(value, value.replace('&#39;', "'").replace('&quot;', "'"));
    return value.replace('&#39;', "'").replace('&quot;', "'");
  }
}
