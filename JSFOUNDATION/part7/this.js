const person = {
  name: "Parth",
  greet() {
    console.log(`Hello, my name is ${this.name} `);
  },
};

person.greet(); // Output: Hello, my name is Parth

const greetFunction = person.greet;
greetFunction(); // Output: Hello, my name is undefined

const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); // Output: Hello, my name is John

//bind,call,apply
