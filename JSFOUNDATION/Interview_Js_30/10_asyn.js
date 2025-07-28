/*

10.How does asynchronous programming work in JavaScript?

ex: using a callback function, 

->
Asynchronous programming in JavaScript allows operations to run in the background without blocking the main thread. This is typically achieved using callbacks, promises, or async/await syntax.
Callbacks are functions passed as arguments to other functions, which are executed after a certain operation completes.

*/

function fetchData(callback) {
  setTimeout(() => {
    callback("data fetched");
  }, 2000); // Simulating a delay of 2 seconds
}
fetchData((data) => {
  console.log(data); // This will log "Data fetched from server" after 2 seconds
});

/*
ex: using a promise
*/

function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data fetched");
    }, 2000); // Simulating a delay of 2 seconds
  });
}
fetchDataPromise().then((data) => {
  console.log(data); // This will log "Data fetched from server" after 2 seconds
});

/*ex: using async/await
 */

async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log(data); // This will log "Data fetched from server" after 2 seconds
}
fetchDataAsync();
