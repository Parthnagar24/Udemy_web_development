/*

5.What is a closure in JavaScript?

->
A closure is a function that retains access to its outer scope variables even after the outer function has finished executing.

*/

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
