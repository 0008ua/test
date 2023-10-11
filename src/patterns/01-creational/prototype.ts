// https://refactoring.guru/design-patterns/prototype/typescript/example#example-0
// Prototype is a creational design pattern
// that lets you copy existing objects without
// making your code dependent on their classes.

export interface IPrototype {
  clone(): this;
}

class Prototype implements IPrototype {
  primitive = 25;
  array = [250, 160];
  clone(): this {
    // return Object.assign({}, this);
    return JSON.parse(JSON.stringify(this));
  }
}

const original = new Prototype();
const copy = original.clone();

console.log('original - before', original);
copy.array.push(333);
console.log('copy - after', copy);
console.log('original - after', original);
