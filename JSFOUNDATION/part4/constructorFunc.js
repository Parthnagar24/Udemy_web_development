//1
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//2
function Car(make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new Car("Toyota", "Camry"); //to create object we must use new keyword
console.log(myCar);

let myNewCar = new Car("Tata", "safari");
console.log(myNewCar);

//4
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());

///5
function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};
let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());

/*function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("Coffee");*/
