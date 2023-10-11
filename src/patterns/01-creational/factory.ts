// https://refactoring.guru/design-patterns/factory-method
// Factory Method is a creational design pattern that provides an interface
// for creating objects in a superclass, but allows subclasses to alter
// the type of objects that will be created.

export interface ICar {
  wheels: number;
  speed: number | undefined;
}

export class Car implements ICar {
  wheels = 4;
  speed: number | undefined = undefined;
}

export class SportCar extends Car {
  constructor() {
    super();
    this.speed = 250;
  }
}

export class SUV extends Car {
  constructor() {
    super();
    this.speed = 150;
  }
}

export class Factory {
  create(carType: string): Car {
    switch (carType) {
      case 'sportCar':
        return new SportCar();
      case 'SUV':
        return new SUV();
      default:
        throw new Error('No such factory');
    }
  }
}

const factory = new Factory();
console.log(factory.create('sportCar'));
