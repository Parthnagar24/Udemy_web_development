//Example 1: Number Comparison

let num1 = 6;
let num2 = 10;

if (num1 > num2) {
  console.log("num1 is greater than num2", num1);
} else {
  console.log("num2 is greater than num1", num2);
}

//Example 2: String Equality
let username = "alexandra";
let userName = "alexandra";

if (username == userName) {
  console.log("Both username are equal");
} else {
  console.log("Not equal");
}

//Example 3: Type Checking

let score = 100;

if (typeof score === "number") {
  console.log("yup this is a number ");
} else {
  console.log("not a number");
}

//Example 4: Boolean Check

let isBooleanValue = false;

if (isBooleanValue) {
  console.log("!");
} else {
  console.log("`");
}

//Example 5: Array Length Check

let array = [3];
if (array.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty", array.length);
}

// Switch Case Example
let color = "red";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Caution!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Unknown color");
}
