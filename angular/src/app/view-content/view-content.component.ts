import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MarkDirective } from './mark.directive';
import { Animal } from './animal';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss'],
})
export class ViewContentComponent implements OnInit, AfterViewInit {
  @ViewChild(MarkDirective, { read: ElementRef, static: true })
  markDirectiveView?: ElementRef;
  @ContentChild('reference', { read: ElementRef, static: true })
  reference?: ElementRef;
  @ContentChildren(MarkDirective, { read: ElementRef })
  markDirectiveContent?: QueryList<ElementRef>;
  @ContentChildren(Animal)
  animals?: QueryList<Animal>;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer2.setProperty(
        this.reference?.nativeElement,
        'textContent',
        'New text after 2000ms',
      );
    }, 2000);
  }

  ngAfterViewInit() {
    this.renderer2.setProperty(
      this.markDirectiveContent?.first.nativeElement,
      'textContent',
      'Content of ViewContentComponent - ngAfterViewInit',
    );
  }

  onTest() {
    this.animals?.toArray().forEach((animal) => {
      animal.say();
    });
    this.renderer2.setProperty(
      this.markDirectiveView?.nativeElement,
      'textContent',
      'Button pressed!',
    );
  }
}
