function Title<T extends { new (...args: any[]): object }>(constructor: T) {
  return class extends constructor {
    title = 'Decorated Title';
  };
}

const Catch = (
  options: { rethrow: boolean } = { rethrow: false },
): MethodDecorator => {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ): void | TypedPropertyDescriptor<any> => {
    const oldValue = descriptor.value;
    descriptor.value = function (...args: any[]) {
      try {
        return oldValue.apply(this, args);
      } catch (e) {
        if (e instanceof Error) {
          console.log('Logged: ' + e.message);
          if (options.rethrow) {
            throw e;
          }
        }
      }
    };
    return descriptor;
  };
}

function Max(max: number) {
  return (target: object, propertyKey: string | symbol) => {
    let value: number;

    const setter = (newValue: number) => {
      if (newValue > max) {
        return console.log('Higher than max');
      }
      value = newValue;
    };

    const getter = () => {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

@Title
class UserService {
  @Max(60)
  users = 50;
  title = 'Old title';

  constructor(title: string) {
    this.title = title;
  }

  printTitle(): string {
    return this.title;
  }

  @Catch({ rethrow: false })
  errorThrow(): void {
    console.log(this.title);
    throw new Error('Logger error');
  }
}

const example = new UserService('New title');
example.errorThrow();
