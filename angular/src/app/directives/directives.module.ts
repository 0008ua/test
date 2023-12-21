import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { CustomStructuralDirective } from './custom-structural.directive';
import { CustomLikeStructuralDirective } from './custom-like-structural.directive';
import { CustomAttributeDirective } from './custom-attribute.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    CustomStructuralDirective,
    CustomLikeStructuralDirective,
    CustomAttributeDirective,
  ],
  imports: [CommonModule],
  exports: [DirectivesComponent],
})
export class DirectivesModule {}
