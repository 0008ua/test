// https://refactoring.guru/design-patterns/command
// Command is a behavioral design pattern that turns a request into a stand-alone object
// that contains all information about the request. This transformation lets you pass requests as a method arguments,
// delay or queue a request’s execution, and support undoable operations.

export interface ICommand<State> {
  execute(state: State): State;
  undo(state: State): State;
}

interface ICommandStack<State> {
  stack: ICommand<State>[];
  state: State;
  execute(command: ICommand<State>): void;
  undo(): void;
}

class CommandStack<State> implements ICommandStack<State> {
  stack: ICommand<State>[] = [];
  constructor(private _currentState: State) {}

  execute(command: ICommand<State>): void {
    this._currentState = command.execute(this._currentState);
    this.stack.push(command);
  }

  undo(): void {
    const command = this.stack.pop();
    if (command) {
      this._currentState = command.undo(this._currentState);
    }
  }

  get state(): State {
    return this._currentState;
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
  undo(state: number): number {
    return state - 1;
  }
}

class DecreaseCommand implements ICommand<number> {
  execute(state: number): number {
    return state - 1;
  }
  undo(state: number): number {
    return state + 1;
  }
}

class SetStateCommand implements ICommand<number> {
  private _originalState?: number;
  constructor(private newState: number) {}
  execute(state: number): number {
    this._originalState = state;
    return this.newState;
  }
  undo(state: number): number {
    return this._originalState || 0;
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


// export interface ICommand {
//   execute(command: string): void;
// }

// class FileSysCommand implements ICommand {
//   private history: string[] = [];
//   constructor(private fileSys: FileSys) {}
//   execute(command: string): void {
//     this.history.push(command);
//     this.fileSys[command]();
//   }
//   getHistory(): void {
//     console.log(this.history);
//   }
// }

// class FileSys {
//   open(): void {
//     console.log('Opening..');
//   }

//   save(): void {
//     console.log('Saving..');
//   }
// }

// class Button {
//   constructor(private command: ICommand) {}
//   open() {
//     this.command.execute('open');
//   }

//   save() {
//     this.command.execute('save');
//   }
// }

// class Menu {
//   constructor(private command: ICommand) {}
//   open() {
//     this.command.execute('open');
//   }
// }

// const fileSys = new FileSys();
// const command = new FileSysCommand(fileSys);
// const button = new Button(command);
// const menu = new Menu(command);

// button.open();
// button.save();
// menu.open();
// command.getHistory();
