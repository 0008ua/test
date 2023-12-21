[< Back to main page](../../readme.md)

# Angular
[Change detection](change-detection.md)
[dependency injection](di.md)

## First page loading optimization
- Bundle size
- AOT compilation
- Lazy loading and preloading
- SSR
- SW
## Runtime optimization
- Change detection (OnPush)
- Web workers (threads)

## ng-template
 Angular uses with structural directives (*ngIf, *ngFor, *ngSwitch). By default not rendered in dom.
 ```typescript
private viewContainerRef = inject(ViewContainerRef);
private templateRef = inject(TemplateRef<object>);
...
this.viewContainerRef.createEmbeddedView(this.templateRef)
 ```
## ng-content
Display content of angular component `<app-comp>Content</app-comp>`
## ng-container
Simple directive that allows you to group elements in a template that Angular doesn’t put it in the DOM (`*ngIf="details" *ngFor="let..` in one div)
