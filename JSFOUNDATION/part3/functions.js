/*1.
 Guide a function named maketea that takes one parameter "typeoftea" and returns a string like "making green tea" when called with "green tea" store the result in a variable name Teaorder
 */

function maketea(typeoftea) {
  return `Making ${typeoftea}`;
  console.log(test);
}
let Teaorder = maketea("green tea");
console.log(Teaorder);

/*
2. Create a function name order team that takes one parameter T tag inside this function create another function named confirmother that returns a message like order confirmed for child confirmed order from within order T and return the result */

function orderTea(teaType) {
  function ConfirmOrder() {
    return `order confirmed for chai`;
  }
  return ConfirmOrder();
}
let orderConfirm = orderTea("chai");
console.log(orderConfirm);

/*
3. Write an arrow function named calculate total that takes two parameters price and quantity the function should return the total cost by multiplying the price and quantity store the result in a variable name total cost  */

const calculateTotal = (price, quantity) => price * quantity;

let totalcost = calculateTotal(499, 100);
console.log(totalcost);

/*
4. Why to function named processedteaorder that  takes another function maketea as a parameter and calls it with the argument earl grey return the result of calling maketea  */

function processedteaorder(maketea) {
  return maketea("earl grey");
}
function maketea(typeoftea) {
  return `maketea: ${typeoftea}`;
}
let order = processedteaorder(maketea);
console.log(order);

/*
5. Write a function in 3T maker that depends another function the return function should take one parameter T type and written a message like making green tea store the return function in a variable link teammaker and call it with green tea */

function createteamaker(named) {
  return function (teaType) {
    return `Making ${teaType} ${named}`;
  };
}
let teamaker = createteamaker("alpha");
let result = teamaker("chai");
console.log(result);
