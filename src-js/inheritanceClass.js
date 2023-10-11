class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`Animal ${this.name} moves!`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  voice() {
    console.log('miaw');
  }
}

const cat = new Cat('Cat', 'cat');
const animal = new Cat('Animal');
console.log('Object.getPrototypeOf(cat)', Object.getPrototypeOf(cat));
console.log('Object.getPrototypeOf(animal)', Object.getPrototypeOf(animal));

cat.voice();
cat.move();
