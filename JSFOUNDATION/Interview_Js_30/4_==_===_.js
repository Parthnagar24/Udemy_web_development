/*

4.Explain the difference between == and === in JavaScript.

->

* "==" : checks for value with type coercion, meaning it converts the operands to the same type before comparison.

* "===" : checks for both value and type without type coercion, meaning it requires both operands to be of the same type and value.

*/

console.log(5 == "5"); // true, because "5" is coerced to a number
console.log(5 === "5"); // false, because the types are different (number vs string)
