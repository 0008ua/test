const Animal = function (name) {
  this.name = name;
};
// true
// console.log('Animal === Animal.prototype.constructor', Animal === Animal.prototype.constructor)

Animal.prototype = {
  constructor: Animal, // to prevent lost of constructor
  move: function () {
    console.log(`animal ${this.name} moves!`);
  },
};

// true
// if there is not prop 'constructor' upper in Animal.prototype than next console false
console.log(
  'Animal === Animal.prototype.constructor',
  Animal === Animal.prototype.constructor,
);

// inherit properties
const Cat = function (name, breed) {
  Animal.call(this, name);
  this.breed = breed;
};

// inherit prototype
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.voice = function () {
  console.log('miaw');
};
// change constructor on Cat
Cat.prototype.constructor = Cat;

console.log('Object.getPrototypeOf(Cat)', Object.getPrototypeOf(Cat));
console.log('Object.getPrototypeOf(Animal)', Object.getPrototypeOf(Animal));

const cat = new Cat('Cat', 'cat');
const animal = new Animal('Animal');
console.log('Object.getPrototypeOf(cat)', Object.getPrototypeOf(cat));
console.log('Object.getPrototypeOf(animal)', Object.getPrototypeOf(animal));

Animal.prototype.jump = function () {
  console.log('jump');
};
cat.voice();
cat.move();
cat.jump();
