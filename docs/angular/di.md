[< Back to main page](../../readme.md)
[< Back ](index.md)

# Angular Dependency Injection

## Token
String </br>
Class </br>
InjectionToken </br>

## Recipe
**useClass** - replace one oclass with another</br>
**useExisting** - same service object with two different tokens</br>
**useValue** - inject a value or a function. Often used to set the initial configuration</br>
**useFactory** </br>
- Specifies the function that is called and injects its return value. Create current service based on another services.
- It is useful when we want to get some value from the information that is not available before the run application, e.g. load some data from another page.
- If it has dependencies, put them in the “deps” array.
- ***“multi”*** property that allows multiple providers with a common token. Prevent to replace existing provider with next registred provider (same token). Creates array of providers with same token.
</br>
```typescript
providers: [{
  provide: APP_INIT,
  useFactory: configUrlFactory,
  deps: [ConfigUrlService],
  multi: true
}]
```

## ProvideIn
**root** - service as singleton for whole app. If this service is using only in lazy module, it will be loaded  when lazy module loaded</br>
**any** - service has one instance for app (at the app bootstrapping) and another instance for lazy module (at lazy loading this module)</br>
**platform** - If there are several apps at one page,service runs as singleton for all that apps </br>

## viewProviders and providers
```typescript
@Component({
  providers: [FirstService]
  viewProviders: [SecondService],
})
```
**FirstService** - share one instance across the entire Component

**SecondService** - share one instance across Component </br>
only ViewChildren (components template) </br>
not ContentChildren (`<ng-content></ng-content>`) </br>