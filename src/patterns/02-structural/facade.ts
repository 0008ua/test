// https://refactoring.guru/design-patterns/facade/typescript/example#example-0
// Facade is a structural design pattern that provides a simplified interface
// to a library, a framework, or any other complex set of classes.

export class Painter {
  paint(): string {
    return 'Painting';
  }
}

export class Writer {
  write(): string {
    return 'Writing';
  }
}

export class Reader {
  read(): string {
    return 'Reading';
  }
}

class Facade {
  constructor(
    private painter: Painter,
    private writer: Writer,
    private reader: Reader,
  ) {}
  do(): string {
    return `I'm ${this.painter.paint()}, ${this.writer.write()} and ${this.reader.read()}`;
  }
}

const facade = new Facade(new Painter(), new Writer(), new Reader());

console.log(facade.do());
