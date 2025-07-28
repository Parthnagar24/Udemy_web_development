/*

9.What is the difference between null and undefined in JavaScript?  

->
In JavaScript, `null` and `undefined` are both used to represent the absence of a value, but they have different meanings:

* `null` is an intentional assignment value that represents "no value" or "empty". It is often used to indicate that a variable has been explicitly set to have no value.

* `undefined` means a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables.

*/

let x = null;
let y;
console.log(x); // null
console.log(y); // undefined
