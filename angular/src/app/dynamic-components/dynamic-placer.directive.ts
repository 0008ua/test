import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appDynamicPlacer]',
})
export class DynamicPlacerDirective {
  public viewContainerRef = inject(ViewContainerRef);

}
