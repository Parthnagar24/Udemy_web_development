//Asynchronous Patterns

/* 1.Callbacks: Traditional way of handling async operations */

setTimeout(() => {
  console.log("This runs after 4 second");
}, 4000);

/*2.Promises: Provide better error handling and avoid callback hell
 

fetch("/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));   */

/* 3.Async/Await: Syntactic sugar over promises that makes async code look synchronous */

async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
