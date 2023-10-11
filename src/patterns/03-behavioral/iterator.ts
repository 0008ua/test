// https://refactoring.guru/design-patterns/iterator
// Iterator is a behavioral design pattern that lets you traverse elements of a collection
// without exposing its underlying representation (list, stack, tree, etc.).

export interface IIterator<T> {
  next(): T | undefined;
  hasNext(): boolean;
}

class Iterator<T> implements IIterator<T> {
  currentPosition: number;
  constructor(private collection: T[]) {
    this.currentPosition = 0;
  }

  next(): T | undefined {
    if (this.hasNext()) {
      const currentEl = this.collection[this.currentPosition];
      this.currentPosition += 1;
      return currentEl;
    }
    return undefined;
  }

  hasNext(): boolean {
    return this.currentPosition < this.collection.length;
  }
}

const collection = ['Hello', 'world', '!'];
const iterable = new Iterator<string>(collection);

console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
