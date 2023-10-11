// https://refactoring.guru/design-patterns/bridge/typescript/example#example-0

// Bridge is a structural design pattern that lets you split a large class or
// a set of closely related classes into two separate hierarchies—abstraction and
// implementation—which can be developed independently of each other.

export interface IWriter {
  write(): string;
}

export class Composer {
  constructor(private writeMethod: IWriter) {}
  compose() {
    console.log(this.writeMethod.write());
  }
}

class WriteBold implements IWriter {
  write() {
    return 'Bold write';
  }
}

class WriteItalic implements IWriter {
  write() {
    return 'Italic write';
  }
}

const writeBold = new WriteBold();
const writeItalic = new WriteItalic();

const composeItalic = new Composer(writeItalic);
const composeBold = new Composer(writeBold);
composeItalic.compose();
composeBold.compose();
