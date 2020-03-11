const a = {
  name: 'John',
  go() {
    console.log(`${this.name} go`);
  }
};

console.log('a', a);
const b = a;
const c = Object.assign({}, a); // copy all enum and own properties

a.name = 'Bob';

console.log('b', b);
console.log('c', c);

const d = Object.create(c); // c becomes prototype of d

console.log('d', d);
console.log('prototype of d (d.__proto__):', Object.getPrototypeOf(d));

const e = Object.assign({}, a);
Object.defineProperties(e, { // add properties
  age: {
    value: 42, // default: undefined
    writable: true, // default: false
    enumerable: true, // default: false
    configurable: true // default: false
  }
});

console.log('e', e);
