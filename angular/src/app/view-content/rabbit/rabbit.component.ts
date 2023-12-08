import { Component } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.scss'],
  providers: [{provide: Animal, useExisting: RabbitComponent}]
})
export class RabbitComponent extends Animal {
  override name = 'Rabbit';
}
