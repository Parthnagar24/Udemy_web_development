/*

8.What are prototypes in JavaScript?

->
Prototypes in JavaScript are a mechanism for sharing properties and methods between objects. Every JavaScript object has a prototype, which is itself an object. When you access a property or method on an object, JavaScript first checks the object itself, and if it doesn't find it, it looks up the prototype chain until it finds the property or reaches the end of the chain.

*/

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice
