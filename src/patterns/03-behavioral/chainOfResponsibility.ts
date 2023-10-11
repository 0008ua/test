// https://refactoring.guru/design-patterns/chain-of-responsibility
// Chain of Responsibility is a behavioral design pattern that lets you pass requests
// along a chain of handlers. Upon receiving a request, each handler decides
// either to process the request or to pass it to the next handler in the chain.

interface Request {
  username: string;
  email: string;
  password: string;
}

export interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: Request): string | null;
}

class Handler implements IHandler {
  private nextHandler!: IHandler;

  setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: Request): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class CheckUsernameHandler extends Handler {
  handle(request: Request): string | null {
    if (!request.username) {
      throw new Error('Wrong username');
    }
    console.log('Username correct!');
    return super.handle(request);
  }
}

class CheckEmailHandler extends Handler {
  handle(request: Request): string | null {
    if (!request.email) {
      throw new Error('Wrong email');
    }
    console.log('Email correct!');
    return super.handle(request);
  }
}

class CheckPasswordHandler extends Handler {
  handle(request: Request): string | null {
    if (!request.password) {
      throw new Error('Wrong password');
    }
    console.log('Password correct!');
    return super.handle(request);
  }
}

const request: Request = {
  username: 'username',
  email: 'email',
  password: 'password',
};

const checkUsernameHandler = new CheckUsernameHandler();
const checkEmailHandler = new CheckEmailHandler();
const checkPasswordHandler = new CheckPasswordHandler();

checkUsernameHandler.setNext(checkEmailHandler);
checkEmailHandler.setNext(checkPasswordHandler);
// checkUsernameHandler.setNext(checkEmailHandler).setNext(checkPasswordHandler);
checkUsernameHandler.handle(request);
