import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCustomStructural]',
})
export class CustomStructuralDirective implements OnInit {
  @Input() appCustomStructural = false;
  @Input() appCustomStructuralTimer = 2000;

  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<object>);

  ngOnInit(): void {
    if (this.appCustomStructural) {
      setTimeout(
        () => this.viewContainerRef.createEmbeddedView(this.templateRef),
        this.appCustomStructuralTimer,
      );
    }
  }
}
