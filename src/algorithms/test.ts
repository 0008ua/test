// https://www.kirillvasiltsov.com/writing/visitor-pattern-typescript/
// https://refactoring.guru/design-patterns/visitor/typescript/example

// Visitor is a behavioral design pattern that allows adding
// new behaviors to existing class hierarchy without altering any existing code

export interface Shape {
  accept(visitor: Visitor): void;
}

export abstract class Visitor {
  abstract visitCircle(x: number): void;
  abstract visitSquare(x: number): void;
  // universal method to connect shape with visitor
  do(shape: Shape) {
    shape.accept(this);
  }
}

export class Circle implements Shape {
  constructor(private x: number) {}

  accept(visitor: Visitor) {
    visitor.visitCircle(this.x);
  }
}

export class Square implements Shape {
  constructor(private x: number) {}
  accept(visitor: Visitor) {
    visitor.visitSquare(this.x);
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
  visitCircle(x: number): void {
    console.log('Calc circle area', x + x);
  }
  visitSquare(x: number): void {
    console.log('Calc square area', x + x);
  }
}

const circle = new Circle(4);
const square = new Square(6);

const drawer = new Drawer();
const areaCalc = new AreaCalc();

drawer.do(circle);
areaCalc.do(square);
