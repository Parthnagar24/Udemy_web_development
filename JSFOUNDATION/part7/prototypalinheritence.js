function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let parth = new Person("Parth");
parth.sayHello(); // Output: Hello, my name is Parth
