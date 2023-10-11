// https://refactoring.guru/design-patterns/mediator
// Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects.
// The pattern restricts direct communications between the objects and
// forces them to collaborate only via a mediator object.

// instance of objects that communicate
// communication is not direct, but using mediator
interface IUser {
  room: IRoom | null;
  name: string;

  send(message: string, to: IUser): void;
  receive(message: string, from: IUser): void;
}

// mediator
interface IRoom {
  // all connected objects list
  members: {
    [key: string]: IUser;
  };

  send(message: string, from: IUser, to?: IUser): void;
  register(user: IUser): void;
}

class User implements IUser {
  room: IRoom | null;
  constructor(public name: string) {
    this.room = null;
  }
  send(message: string, to?: IUser): void {
    this.room?.send(message, this, to);
  }
  receive(message: string, from: IUser): void {
    console.log(`${from.name} -> ${this.name}: ${message}`);
  }
}

class Room implements IRoom {
  members: { [key: string]: IUser } = {};

  send(message: string, from: IUser, to?: IUser | undefined): void {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.members)
        .filter((key) => this.members[key].name !== from.name)
        .forEach((key) => {
          this.members[key].receive(message, from);
        });
    }
  }

  register(user: IUser): void {
    // append user to memebers list
    this.members[user.name] = user;
    // bind room to user
    user.room = this;
  }
}

const chat = new Room();
const u1 = new User('U1');
const u2 = new User('U2');
const u3 = new User('U3');

chat.register(u1);
chat.register(u2);
chat.register(u3);

u1.send('Message!!!', u2);
u2.send('Hello all!');
