// https://refactoring.guru/design-patterns/adapter/typescript/example#example-0
// Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

export class OldInterface {
  send(first: string, second: string): string {
    return `Old interface ${first} and ${second}`;
  }
}

export class NewInterface {
  sendNew(tupple: [string, string]): string {
    return `New interface ${tupple[0]} and ${tupple[1]}`;
  }
}

class Adapter extends OldInterface {
  constructor(private newInterface: NewInterface) {
    super();
  }
  send(first: string, second: string) {
    return this.newInterface.sendNew([first, second]);
  }
}

const newInterface = new NewInterface();
const adapter = new Adapter(newInterface);

console.log(adapter.send('first', 'second'));
