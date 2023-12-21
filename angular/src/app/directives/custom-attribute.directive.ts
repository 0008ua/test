import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]',
})
export class CustomAttributeDirective {
  @Input() appCustomAttribute = 'black';
  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'color',
      this.appCustomAttribute,
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
}
