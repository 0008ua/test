// https://refactoring.guru/design-patterns/decorator
// Decorator is a structural design pattern that lets you attach new behaviors to objects
// by placing these objects inside special wrapper objects that contain the behaviors.

// v1

export interface IComputer {
  boot(): void;
  print(): void;
  display(): void;
}

class Computer implements IComputer {
  boot(): void {
    console.log('The computer is booting..');
  }
  print(): void {
    console.log("Can't print");
  }
  display(): void {
    console.log("Can't display");
  }
}

class ComputerDecorator extends Computer {
  constructor(protected computer: Computer) {
    super();
  }
  boot(): void {
    this.computer.boot();
  }
  print(): void {
    this.computer.print();
  }
  display(): void {
    this.computer.display();
  }
}

class ComputerPrinterDecorator extends ComputerDecorator {
  override print(): void {
    console.log('The computer is printing..');
  }
}

class ComputerDisplayDecorator extends ComputerDecorator {
  override display(): void {
    console.log('The computer is displaying..');
  }
}

const computer = new Computer();
const printer = new ComputerPrinterDecorator(computer);
const display = new ComputerDisplayDecorator(printer);

display.boot();
display.print();
display.display();

// v2

// export interface IEmail {
//   send(): string;
// }

// class Email implements IEmail {
//   send() {
//     return 'Email message! ';
//   }
// }

// class Decorator implements IEmail {
//   constructor(private base: Email) {}
//   send(): string {
//     return this.base.send();
//   }
// }

// class SMS extends Decorator {
//   send() {
//     return 'SMS message! ' + super.send();
//   }
// }

// class Messanger extends Decorator {
//   send() {
//     return 'Messanger message! ' + super.send();
//   }
// }

// const email = new Email();

// const sms = new SMS(email);
// const messanger = new Messanger(sms);
// console.log(messanger.send());
