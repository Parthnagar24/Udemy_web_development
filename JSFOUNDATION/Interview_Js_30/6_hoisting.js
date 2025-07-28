/*

6.What is hoisting in JavaScript?

->
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.

*/

console.log(x); // undefined
var x = 5; // Variable declaration is hoisted, but assignment is not
