// Memento is a behavioral design pattern that lets you save and restore
// the previous state of an object without revealing the details of its implementation
// this example is based on command pattern

export interface ICommand<State> {
  execute(state: State): State;
}

interface ICommandStack<State> {
  stack: string[];
  state: State;
  execute(command: ICommand<State>): void;
  undo(): void;
}

class CommandStack<State> implements ICommandStack<State> {
  stack: string[] = [];
  constructor(initialState: State) {
    this.stack.push(JSON.stringify(initialState));
  }

  execute(command: ICommand<State>): void {
    const newState = JSON.stringify(command.execute(this.state));
    this.stack.push(newState);
  }

  undo(): void {
    if (this.stack.length > 1) {
      this.stack.pop();
    }
  }

  get state(): State {
    return JSON.parse(this.stack[this.stack.length - 1]);
  }
}

class CalcCommandStack extends CommandStack<number> {
  constructor() {
    super(0);
  }
}

class IncreaseCommand implements ICommand<number> {
  execute(state: number): number {
    return state + 1;
  }
}

class DecreaseCommand implements ICommand<number> {
  execute(state: number): number {
    return state - 1;
  }
}

class SetStateCommand implements ICommand<number> {
  constructor(private newState: number) {}
  execute(state: number): number {
    return this.newState;
  }
}

const calculator = new CalcCommandStack();
const inc = new IncreaseCommand();
const dec = new DecreaseCommand();

calculator.execute(inc);
console.log(calculator.state);

calculator.execute(inc);
console.log(calculator.state);
calculator.undo();
console.log(calculator.state);
calculator.execute(dec);
console.log(calculator.state);
calculator.execute(new SetStateCommand(55));
console.log(calculator.state);
calculator.undo();
console.log(calculator.state);
calculator.undo();
console.log(calculator.state);
