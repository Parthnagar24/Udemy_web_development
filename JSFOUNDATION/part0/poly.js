// Enhanced Polymorphism Example
class Bird {
  constructor(name) {
    this.name = name;
  }

  fly() {
    return `${this.name} is flying in the sky`;
  }

  makeSound() {
    return `${this.name} makes a sound`;
  }
}

class Penguin extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    return `${this.name} can't fly, but swims gracefully!`;
  }

  makeSound() {
    return `${this.name} says: Squawk squawk!`;
  }

  swim() {
    return `${this.name} is swimming underwater`;
  }
}

class Eagle extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    return `${this.name} soars majestically through the clouds`;
  }

  makeSound() {
    return `${this.name} screeches: Screech!`;
  }

  hunt() {
    return `${this.name} is hunting for prey`;
  }
}

class Parrot extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    return `${this.name} flies with colorful wings`;
  }

  makeSound() {
    return `${this.name} says: Hello! Polly wants a cracker!`;
  }

  mimic(phrase) {
    return `${this.name} mimics: "${phrase}"`;
  }
}

// Polymorphism in action - same method calls, different behaviors
function birdShow(birds) {
  console.log("=== Bird Show ===");
  birds.forEach((bird) => {
    console.log(bird.fly()); // Each bird flies differently
    console.log(bird.makeSound()); // Each bird sounds different
    console.log("---");
  });
}

// Array of different bird types - polymorphism
const birds = [
  new Bird("Generic Bird"),
  new Penguin("Pingu"),
  new Eagle("Sky Hunter"),
  new Parrot("Polly"),
];

// Same function works with all bird types
birdShow(birds);

// Individual specific behaviors
const penguin = new Penguin("Waddles");
const parrot = new Parrot("Chatty");

console.log(penguin.swim()); // Only penguins can swim
console.log(parrot.mimic("Hello!")); // Only parrots can mimic
