import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCustomLikeStructural]',
})
export class CustomLikeStructuralDirective implements OnInit {
  @Input() appCustomLikeStructural = false;
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<object>);

  ngOnInit(): void {
    if (this.appCustomLikeStructural) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
