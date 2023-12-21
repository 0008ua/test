import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMark]',
  exportAs: 'mark',
})
export class MarkDirective {
  @HostBinding('style.color') color= 'blue';

  changeColor(color: string): void {
    this.color = color;
  }
}
