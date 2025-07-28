// Function Declaration Example
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function
console.log(greet("Alice")); // Output: "Hello, Alice!"
// Function Expression
// You can also assign a function to a variable:
const greetExpression = function (name) {
  return "Hello, " + name + "!";
};
// Arrow Functions (ES6+)
// A more concise syntax introduced in ES6:
const greetArrow = (name) => {
  return "Hello, " + name + "!";
};

// Or even shorter for single expressions:
const greetShort = (name) => "Hello, " + name + "!";
// Key Concepts
// Parameters and Arguments: Functions can accept input values called parameters. When you call the function, you pass arguments.
function add(a, b) {
  // a and b are parameters
  return a + b;
}

add(5, 3); // 5 and 3 are arguments

// Return Values: Functions can return a value using the return statement. If no return is specified, the function returns undefined.
function multiply(x, y) {
  return x * y; // Returns the result
}

function sayHello() {
  console.log("Hello!");
  // No return statement = returns undefined
}

// Scope: Variables declared inside a function are only accessible within that function (local scope).
function example() {
  let localVar = "I'm local";
  console.log(localVar); // Works
}

// console.log(localVar); // Error: localVar is not defined

// Function Hoisting
// Function declarations are "hoisted" - you can call them before they're defined in your code:
sayHi(); // This works!

function sayHi() {
  console.log("Hi!");
}

// However, function expressions are not hoisted:
// sayBye(); // Error: Cannot access 'sayBye' before initialization

const sayBye = function () {
  console.log("Bye!");
};
