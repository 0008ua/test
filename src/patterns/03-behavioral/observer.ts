// Observer is a behavioral design pattern that lets you define a subscription mechanism
// to notify multiple objects about any events that happen to the object they’re observing.

// RXJS
// Observable: represents the idea of an invokable collection of future values or events.
// Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
// Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
// Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
// Subject: is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
// Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

// v1
export type IObserver<T> = (value: T) => any;

export interface ISubject<T> {
  observers: IObserver<T>[];
  next(value: T): void;
  subscribe(observer: IObserver<T>): void;
}

class Subject implements ISubject<string> {
  observers: IObserver<string>[] = [];
  next(value: string): void {
    this.observers.forEach((o) => o(value));
  }
  subscribe(observer: IObserver<string>): void {
    this.observers.push(observer);
  }
  unsubscribe(): void {
    this.observers = [];
  }
}

const subject = new Subject();

subject.subscribe((value: string) => console.log('observer1 ', value));
subject.subscribe((value: string) => console.log('observer2 ', value));

subject.next('Broadcast');

subject.unsubscribe();

subject.next('Broadcast2');

// v2
// export interface IObserver {
//   name: string;
//   notify(sub: string): void;
// }

// export interface ISubject {
//   observers: IObserver[];
//   subscribe(observer: IObserver): void;
//   unsubscribe(): void;
//   next(sub: string): void;
// }

// class Observer implements IObserver {
//   constructor(public name: string) {}
//   notify(sub: string): void {
//     console.log(this.name + ' got ' + sub);
//   }
// }

// class Subject implements ISubject {
//   unsubscribe(): void {
//     throw new Error('Method not implemented.');
//   }
//   observers: IObserver[] = [];
//   subscribe(observer: IObserver): void {
//     this.observers.push(observer);
//   }
//   next(sub: string): void {
//     this.observers.forEach((observer) => observer.notify(sub));
//   }
// }

// const stream$ = new Subject();
// const observer1 = new Observer('Observer 1');
// const observer2 = new Observer('Observer 2');

// stream$.subscribe(observer1);
// stream$.subscribe(observer2);

// stream$.next('info');
