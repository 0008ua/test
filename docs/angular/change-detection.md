[< Back to main page](../../readme.md)
[< Back ](index.md)

# Angular Change Detection

## Manual change detection
main.ts
```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: 'noop' })
```
component
```typescript
constructor ( private cdr: ChangeDetectorRef) {}
...
method() {
  this.cdr.detectChanges()
}
```
## Cases in which state of app might change
+ setTimeout, setInterval
+ events (click, focus..) which registred in angular ..app> (click)="handler()..
+ HTTP request completes

ngZone can only suspect that changes happend, but don't now in which component

then run view check (dom === model) recursively from the root to all child

## OnPush
Avoid change detection process on component and it's children until mark for check (mark dirty)
```typescript
@Component({ ..
  changeDetection: ChangeDetactionStrategy.OnPush
})
```
markForCheck(), not run check immediately, allow to check component and it's tree on next change detection cycle </br>
Marks all ancestors as dirty too (this lets ngZone go down through tree, where can also be onPush components and reach current component)
```typescript
  this.cdr.markForCheck()
```
### Cases when Angular marks as dirty component automaticaly
+ Component state changed inside **eventHandler** ..app> (click)="handler()..  ..handler() { this.property='a' }..
+ **@Input()** value changed
+ **|async** pipe

