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
    return `${this.make} is a Company and ${this.model} is a brand: inheritance example`;
  }
}

// Create an object of Car
const myCar = new Car("Toyota", "Corolla");

// Print outputs
console.log(myCar.start()); // From Vehicle
console.log(myCar.drive()); // From Car
