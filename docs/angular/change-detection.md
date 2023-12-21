[< Back to main page](../../readme.md) [< Back ](index.md)

# Angular Change Detection

Change model -> Change DOM

## Manual change detection

main.ts
```typescript
platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' });
```

component
```typescript
constructor ( private changeDetectorRef: ChangeDetectorRef) {}
...
method() {
  this.changeDetectorRef.detectChanges()
}
```

## Run Change Detection
**detectChanges()** This one is used to run change detection for the tree of components starting with the component that you trigger detectChanges() on. So the change detection will run for the current component and all its children. Angular holds references to the root component tree in the ApplicationRef and when any async operation happens it triggers change detection on this root component through a wrapper method **tick()** </br>
**markForCheck()** doesn't trigger change detection at all. It simply goes upwards from the current component to the root component and updates their view state to ChecksEnabled

1. this.changeDetectorRef.markForCheck()
2. this.changeDetectorRef.detectChanges()
3. this.applicationRef.tick()

## Cases in which state of app might change

- setTimeout, setInterval
- events (click, focus..) which registred in angular ..app> (click)="handler()..
- HTTP request completes

ngZone can only suspect that changes happend, but don't now in which component

then run view check (dom === model) recursively from the root to all child

## OnPush

Avoid change detection process on component and it's children until mark for
check (mark dirty)

```typescript
@Component({ ..
  changeDetection: ChangeDetactionStrategy.OnPush
})
```

markForCheck(), not run check immediately, allow to check component and it's
tree on next change detection cycle </br> Marks all ancestors as dirty too (this
lets ngZone go down through tree, where can also be onPush components and reach
current component)

```typescript
this.changeDetectorRef.markForCheck();
```

### Cases when Angular marks as dirty component automaticaly
- Component state changed inside **eventHandler** ..app> (click)="handler()..
  ..handler() { this.property='a' }..
- **@Input()** value changed
- **|async** pipe

### Obsevables (not asyncPipe)
Need to manualy call `this.changeDetectorRef.markForCheck();`

## Avoid run change detection on some event

```typescript
constructor(ngZone: NgZone) {
  ngZone.runOutsideAngular(() => {
    // timer
    // ...
  })
}
```

## Manualy run change detection oon timer
don`'t forget to disable ngZone in main.ts
```typescript
constructor(applicationRef: ApplicationRef) {
  setTimeout(() => {
    this.applicationRef.tick()
  }), 100
}
```
