/*
11.What is promise in JavaScript?

->
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable way, avoiding callback hell.      

A Promise can be in one of three states:
1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully, resulting in a value.
3. **Rejected**: The operation failed, resulting in a reason for the failure (usually an error).

Promises are created using the `Promise` constructor, which takes a function (executor) that has two parameters: `resolve` and `reject`. You can use the `.then()` method to handle fulfilled promises and the `.catch()` method to handle rejected promises.
*/

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}
