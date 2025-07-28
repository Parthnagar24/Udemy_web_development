console.log("Start");

setTimeout(() => {
  console.log("This runs after 4 seconds");
}, 4000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds (after 2 second delay)
