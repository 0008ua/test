import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentsComponent } from './dynamic-components.component';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';
import { DynamicPlacerDirective } from './dynamic-placer.directive';
import { Banner3Component } from './banner3/banner3.component';

@NgModule({
  declarations: [
    DynamicComponentsComponent,
    Banner1Component,
    Banner2Component,
    DynamicPlacerDirective,
    Banner3Component,
  ],
  imports: [CommonModule],
  exports: [DynamicComponentsComponent],
})
export class DynamicComponentsModule {}
