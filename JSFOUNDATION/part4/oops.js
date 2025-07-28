// Objects are instance of a class

//1
let car = {
  make: "Tata",
  model: "Punch",
  Year: "2015",

  start: function () {
    return `${this.make} a racing car in ${this.Year}`;
  },
};
//console.log(car.start());

//2
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let John = new Person("John", 56);
//console.log(John);

//3
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
//console.log(myArray.hitesh());

// Inheritence
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} is a Company and ${this.model} is a brand`;
  }
}
class Car extends Vehicle {
  drive() {
    return `${this.make} is a Company and ${this.model} is a brand :inheritence example`;
  }
}
let myCar = new Car("Tata", "Neu");
console.log(myCar.start());
console.log(myCar.drive());

//Encapsulation -a concept of restricting  direct access to object data

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount();
console.log(account.getBalance());

// Abstraction - hides the complex implementation details

class CoffeeMachine {
  start() {
    //call DB
    ///filter value
    return `starting the machine....`;
  }
  brewCoffee() {
    return `Brew`;
  }
  pressStart() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return ` ${msg1} + ${msg2}`;
  }
}
let myMachine = new CoffeeMachine();
console.log(myMachine.pressStart());

//Polymorphism - the ability of something to have or to be displayed in more than one form

class Bird {
  fly() {
    return `Flying...`;
  }
}
class penguin extends Bird {
  fly() {
    return `Cant fly-penguin`;
  }
}
let bird = new Bird();
let penguinn = new penguin();
console.log(bird.fly());
console.log(penguinn.fly());

//static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
console.log(Calculator.add(2, 5));

// Getters and Setters

class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }
  get salary() {
    return `you are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let employee = new Employee("Aj", -5000000);
console.log(employee.salary);
