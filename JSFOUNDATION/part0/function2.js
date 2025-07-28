// 1. Function that takes tea type and returns a making message
function maketea(typeoftea) {
  return `Making ${typeoftea}`;
  // Note: console.log(test) was unreachable code after return - removed
}

let teaOrder = maketea("green tea");
console.log(teaOrder); // Output: "Making green tea"

console.log("--- Problem 1 ---");
console.log(teaOrder);

// 2. Function with nested function for order confirmation
function orderTea(teaType) {
  function confirmOrder() {
    // Fixed: Now uses the parameter teaType instead of hardcoded "chai"
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfirm = orderTea("chai");
console.log("--- Problem 2 ---");
console.log(orderConfirm); // Output: "Order confirmed for chai"

// 3. Arrow function to calculate total cost
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499, 100); // Fixed variable name (was totalcost)
console.log("--- Problem 3 ---");
console.log(totalCost); // Output: 49900

// 4. Higher-order function that takes another function as parameter
function processTeaOrder(teaMakerFunction) {
  // Fixed function name
  return teaMakerFunction("earl grey");
}

// Separate maketea function for this example
function makeTeaForOrder(typeoftea) {
  return `Making: ${typeoftea}`;
}

let order = processTeaOrder(makeTeaForOrder);
console.log("--- Problem 4 ---");
console.log(order); // Output: "Making: earl grey"

// 5. Function that returns another function (closure)
function createTeaMaker(makerName) {
  // Fixed parameter name for clarity
  return function (teaType) {
    return `Making ${teaType} by ${makerName}`;
  };
}

let teaMaker = createTeaMaker("Tea Master Alpha"); // Fixed variable name
let result = teaMaker("green tea");
console.log("--- Problem 5 ---");
console.log(result); // Output: "Making green tea by Tea Master Alpha"

// Alternative version of problem 5 with more descriptive naming:
function createTeaMakerV2() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let simplTeaMaker = createTeaMakerV2();
let simpleResult = simplTeaMaker("green tea");
console.log("--- Problem 5 Alternative ---");
console.log(simpleResult); // Output: "Making green tea"
