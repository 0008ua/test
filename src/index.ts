class Singleton {
  static instance: Singleton | null = null;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const one = new Singleton();
const two = new Singleton();

console.log(one === two);
