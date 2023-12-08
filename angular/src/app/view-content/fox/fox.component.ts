import { Component } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.scss'],
  providers: [{ provide: Animal, useExisting: FoxComponent }],
})
export class FoxComponent extends Animal {
  override name = 'Fox';
}
