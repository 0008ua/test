// https://www.kirillvasiltsov.com/writing/visitor-pattern-typescript/
// https://refactoring.guru/design-patterns/visitor/typescript/example

// Visitor is a behavioral design pattern that allows adding
// new behaviors to existing class hierarchy without altering any existing code

export interface Shape {
  accept(visitor: Visitor): void;
}

export abstract class Visitor {
  abstract visitCircle(): void;
  abstract visitSquare(): void;
  // universal method to connect shape with visitor
  do(shape: Shape) {
    shape.accept(this);
  }
}

export class Circle implements Shape {
  accept(visitor: Visitor) {
    visitor.visitCircle();
  }
}

export class Square implements Shape {
  accept(visitor: Visitor) {
    visitor.visitSquare();
  }
}

// create draw behaviour for shapes
export class Drawer extends Visitor {
  visitCircle(): void {
    console.log('Draw circle');
  }
  visitSquare(): void {
    console.log('Draw square');
  }
}

// create area calc behaviour for shapes
export class AreaCalc extends Visitor {
  visitCircle(): void {
    console.log('Calc circle area');
  }
  visitSquare(): void {
    console.log('Calc square area');
  }
}

const circle = new Circle();
const square = new Square();

const drawer = new Drawer();
const areaCalc = new AreaCalc();

drawer.do(circle);
areaCalc.do(square);
