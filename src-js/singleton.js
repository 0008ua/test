class Singleton {
  // constructor(data) {
  //     if (this.constructor.instance) {
  //         return this.constructor.instance;
  //     }
  //     this.constructor.instance = this;
  // this.data = data;
  //     return this;
  // }

  constructor(data) {
    console.log('x', Singleton === Singleton.prototype.constructor);
    console.log('Singleton.instance', Singleton.instance);
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = data;
    return this;
  }
}

const one = new Singleton();
const two = new Singleton();

console.log('compare', one === two);

function SingletonF(data) {
  if (SingletonF.instance) {
    return SingletonF.instance;
  }
  SingletonF.instance = this;
  this.data = data;
  return this;
}

const oneF = new SingletonF();
const twoF = new SingletonF();

console.log('compareF', oneF === twoF);
