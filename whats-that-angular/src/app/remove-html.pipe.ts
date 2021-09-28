import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtml',
})
export class RemoveHtmlPipe implements PipeTransform {
  transform(value: string): any {
    let span = document.createElement('span');
    span.innerHTML = value;
    return span.textContent;
  }
}
