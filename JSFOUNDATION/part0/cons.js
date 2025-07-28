class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    return `${this.brand} ${this.model} is now running`;
  }

  stop() {
    this.isRunning = false;
    return `${this.brand} ${this.model} has stopped`;
  }
}

// Creating instances
const myCar = new Car("Toyota", "Camry", 2023);
const yourCar = new Car("Honda", "Civic", 2022);

console.log(myCar.start()); // "Toyota Camry is now running"
console.log(yourCar.brand); // "Honda"
