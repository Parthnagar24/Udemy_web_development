// Constructor function (note the capital letter convention)
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  this.introduce = function () {
    return `Hi, I'm ${this.name}, ${this.age} years old from ${this.city}`;
  };
}

// Creating instances using the constructor
const person1 = new Person("Alice", 25, "New York");
const person2 = new Person("Bob", 30, "London");

console.log(person1.introduce()); // "Hi, I'm Alice, 25 years old from New York"
console.log(person2.introduce()); // "Hi, I'm Bob, 30 years old from London"
