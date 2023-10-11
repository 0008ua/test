// Strategy is a behavioral design pattern that lets you define a family of algorithms,
// put each of them into a separate class, and make their objects interchangeable.

export interface IErrorStratergy {
  log(message: string): void;
}

class ConsoleErrorStrategy implements IErrorStratergy {
  log(message: string): void {
    console.error('Some error - ' + message);
  }
}

class ConsoleLogStrategy implements IErrorStratergy {
  log(message: string): void {
    console.log('Error logged - ' + message);
  }
}

class ErrorHandler {
  constructor(private strategy: IErrorStratergy) {}
  handle(error: Error) {
    this.strategy.log(error.message);
  }
}

const consoleLogStrategy = new ConsoleLogStrategy();
const consoleErrorStrategy = new ConsoleErrorStrategy();

const errorHandler1 = new ErrorHandler(consoleLogStrategy);
const errorHandler2 = new ErrorHandler(consoleErrorStrategy);

try {
  throw new Error('Error !!!');
} catch (e: any) {
  errorHandler1.handle(e);
}
