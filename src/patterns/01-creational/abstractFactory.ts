// https://refactoring.guru/design-patterns/abstract-factory
// Abstract Factory is a creational design pattern that lets you produce
// families of related objects without specifying their concrete classes.

export interface ITable {
  legs: number;
  name: string;
}

class ModernTable implements ITable {
  legs = 6;
  name = 'ModernTable';
}

class ClassicTable implements ITable {
  legs = 4;
  name = 'ClassicTable';
}

export interface ISofa {
  width: number;
  name: string;
}

class ModernSofa implements ISofa {
  width = 40;
  name = 'ModernSofa';
}

class ClassicSofa implements ISofa {
  width = 80;
  name = 'ClassicSofa';
}

export interface IFactory {
  createTable(): ITable;
  createSofa(): ISofa;
}

export class ModernFactory implements IFactory {
  createTable(): ITable {
    return new ModernTable();
  }
  createSofa(): ISofa {
    return new ModernSofa();
  }
}

export class ClassicFactory implements IFactory {
  createTable(): ITable {
    return new ClassicTable();
  }
  createSofa(): ISofa {
    return new ClassicSofa();
  }
}

const config = {
  factory: 'modern',
};

export class Factory {
  factory: IFactory;

  constructor(config: any) {
    const { factory } = config;
    switch (factory) {
      case 'modern':
        this.factory = new ModernFactory();
        break;
      case 'classic':
        this.factory = new ClassicFactory();
        break;
      default:
        throw new Error('No such factory');
    }
  }

  createTable(): ITable {
    return this.factory.createTable();
  }
  createSofa(): ISofa {
    return this.factory.createSofa();
  }
}

const factory = new Factory(config);
console.log(factory.createSofa());
console.log(factory.createTable());
