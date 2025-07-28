//Primitive Data Types in JavaScript
//Numbers
let age = 25; // Integer
let price = 99.99; // Decimal
let negative = -42; // Negative
let infinity = Infinity; // Special numeric value
let notANumber = NaN; // "Not a Number"

//Strings
let name = "John Doe"; // Single quotes
let greeting = "Hello, World!"; // Double quotes
let templateLiteral = `Hello, ${name}`; // Template literal

//Booleans
let isActive = true; // True value
let isComplete = false; // False value

//Undefined
let uninitialized; // Variable declared but not assigned
let x; // undefined (declared but not assigned)
let obj = { name: "John" };
console.log(obj.age); // undefined (property doesn't exist)

//Null
let emptyValue = null; // Explicitly set to no value

//Symbols
let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId); // false (each symbol is unique)

//BigInt
let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("999999999999999999999");

//Non Primitive Data Types in JavaScript
let person = {
  name: "Priya",
  age: 28,
  city: "Chennai",
};

let colors = ["red", "green", "blue"]; // Array is a type of object

function greet() {
  // Function is also an object
  return "Hello!";
}
