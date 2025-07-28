/*
30.Explain the difference btw prototype and __proto__ in JavaScript.    

->
In JavaScript, `prototype` and `__proto__` are related to the prototype chain but serve different purposes:

* `prototype`: This is a property of constructor functions. It is used to define properties and methods that should be shared among all instances created by that constructor. When you create an object using a constructor function, the object's prototype is set to the constructor's `prototype` property.

* `__proto__`: This is an internal property of all objects that points to the prototype of the object. It is used to access the prototype chain. When you access a property or method on an object, JavaScript first checks the object itself, and if it doesn't find it, it looks up the `__proto__` chain until it finds the property or reaches the end of the chain.

*/

function Animal() {
  const animal = new Animal();
  console.log(animal.__proto__ === Animal.prototype); // true, because the object's __proto__ points to the Animal's prototype
}
