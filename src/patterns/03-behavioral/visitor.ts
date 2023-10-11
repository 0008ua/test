// https://www.kirillvasiltsov.com/writing/visitor-pattern-typescript/
// https://refactoring.guru/design-patterns/visitor/typescript/example

// Visitor is a behavioral design pattern that allows adding
// new behaviors to existing class hierarchy without altering any existing code

export interface Shape {
  accept(visitor: Visitor): void;
}

export interface Visitor {
  visitCircle(): void;
  visitSquare(): void;
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
export class Drawer implements Visitor {
  visitCircle(): void {
    console.log('Draw circle');
  }
  visitSquare(): void {
    console.log('Draw square');
  }

  // universal method to connect shape with visitor
  draw(shape: Shape) {
    shape.accept(this);
  }
}

// create area calc behaviour for shapes
export class AreaCalc implements Visitor {
  visitCircle(): void {
    console.log('Calc circle area');
  }
  visitSquare(): void {
    console.log('Calc square area');
  }

  calc(shape: Shape) {
    shape.accept(this);
  }
}

const circle = new Circle();
const square = new Square();

const drawer = new Drawer();
const areaCalc = new AreaCalc();

drawer.draw(circle);
areaCalc.calc(square);