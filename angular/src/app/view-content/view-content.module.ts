import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContentComponent } from './view-content.component';
import { FoxComponent } from './fox/fox.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { RockComponent } from './rock/rock.component';
import { MarkDirective } from './mark.directive';

@NgModule({
  declarations: [
    ViewContentComponent,
    FoxComponent,
    RabbitComponent,
    RockComponent,
    MarkDirective,
  ],
  imports: [CommonModule],
  exports: [
    ViewContentComponent,
    RabbitComponent,
    FoxComponent,
    RockComponent,
    MarkDirective,
  ],
})
export class ViewContentModule {}
