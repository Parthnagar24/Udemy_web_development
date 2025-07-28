/*
26.Set

->
Set is a collection of values, where each value must be unique.

*/

const mySet = new Set();
// Adding values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate value, will not be added
console.log(mySet); // Set { 1, 2, 3 }
// Checking if a value exists in the set
console.log(mySet.has(2)); // true
console.log(mySet.has(4)); // false
