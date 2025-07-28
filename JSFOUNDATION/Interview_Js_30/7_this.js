/*

7.Explaining 'this' in JavaScript

->
In JavaScript, 'this' refers to the context in which a function is executed. It can vary based on how a function is called:

1. In a regular function call, 'this' refers to the global object (window in browsers).

2. In a method call, 'this' refers to the object that the method is called on.

3. In a constructor function, 'this' refers to the newly created object.  

4. In an arrow function, 'this' is lexically bound, meaning it retains the value of 'this' from its enclosing context.

*/
function regularFunction() {
  console.log(this); // In a regular function, 'this' refers to the global object (window in browsers)
}
regularFunction();
console.log(regularFunction()); // Calling the regular function to see 'this' in action

const obj = {
  name: "Object",
  function() {
    console.log(this.name); // In a method, 'this' refers to the object itself
  },
};
obj.function();

function ConstructorFunction() {
  this.value = "I am a constructor";
  console.log(this); // In a constructor, 'this' refers to the newly created object
}
const instance = new ConstructorFunction();
console.log(instance.value); // Accessing the property of the instance created by the constructor function

const arrowFunction = () => {
  console.log(this); // In an arrow function, 'this' is lexically bound to the surrounding context
};

arrowFunction(); // In this case, 'this' will refer to the global object or the enclosing context where the arrow function is defined

console.log(arrowFunction()); // Calling the arrow function to see 'this' in action
