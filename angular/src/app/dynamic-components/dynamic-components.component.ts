import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Banner1Component } from './banner1/banner1.component';
import { DynamicPlacerDirective } from './dynamic-placer.directive';
import { Banner2Component } from './banner2/banner2.component';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss'],
})
export class DynamicComponentsComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicPlacerDirective)
  dynamicPlacerDirective?: DynamicPlacerDirective;
  private viewContainerRef = inject(ViewContainerRef);

  ngOnInit(): void {
    // place dynamic component after current component (DynamicComponentsComponent)
    this.viewContainerRef.createComponent(Banner1Component);
  }

  ngAfterViewInit(): void {
    // place dynamic component after directive (DynamicPlacerDirective)
    this.dynamicPlacerDirective?.viewContainerRef.createComponent(
      Banner2Component,
    );
  }

  // replace dynamic component
  async replaceDynamicComponent() {
    const { Banner3Component } = await import('./banner3/banner3.component');
    this.viewContainerRef.remove();
    this.viewContainerRef.createComponent(Banner3Component);
  }
}
