/*
12.What are async/await in JavaScript?

->
Async/await is a syntax in JavaScript that allows you to work with asynchronous code in a more synchronous manner. It is built on top of Promises and provides a way to write asynchronous code that is easier to read and maintain.
The `async` keyword is used to declare a function as asynchronous, which means it will always return a Promise. Inside an async function, you can use the `await` keyword to pause the execution of the function until the Promise is resolved or rejected.
*/

async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log(data); // This will log "Data fetched successfully" after 2 seconds
}
fetchDataAsync();
/*
The `await` keyword can only be used inside an async function, and it allows you to
wait for a Promise to resolve before proceeding with the next line of code. This makes it easier to write asynchronous code that looks and behaves like synchronous code, improving readability and reducing complexity.
*/
/*
Async/await is particularly useful for handling sequences of asynchronous operations, as it allows you to write
code that is more linear and easier to follow compared to using nested callbacks or chaining Promises.
*/
/*Async/await is supported in modern JavaScript environments, including most browsers and Node.js versions. However, if you need to support older environments, you may need to use a transpiler like Babel to convert your async/await code into a format that is compatible with those environments.
 */
