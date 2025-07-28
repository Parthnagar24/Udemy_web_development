/*
23.What is the new keyword in JavaScript?

->
The `new` keyword in JavaScript is used to create an instance of a constructor function or
a class. When you use `new`, it performs the following steps:
1. **Creates a New Object**: It creates a new empty object.
2. **Sets the Prototype**: It sets the prototype of the new object to the prototype of the constructor function or class.
3. **Binds `this`**: It binds the `this` keyword in the
constructor function or class to the new object.
4. **Executes the Constructor**: It calls the constructor function or class with the new object as `this`.
5. **Returns the Object**: If the constructor function or class does not explicitly return an object, the new object is returned by default.
The `new` keyword is essential for creating instances of objects that have properties and methods defined in their constructor functions or classes.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 30);
console.log(person1); // Person { name: 'Alice', age: 30 }
