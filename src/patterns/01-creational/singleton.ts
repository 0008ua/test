// https://refactoring.guru/design-patterns/singleton/typescript/example#example-0
// Singleton is a creational design pattern that lets you ensure that a class has only one instance,
// while providing a global access point to this instance.

export class Singleton {
  static instance: Singleton;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const one = new Singleton();
const two = new Singleton();

console.log(one === two);
