console.log("Hello");
console.log("Chai");

process.stdout.write("chai");
process.stdout.write("chai");

//console.error - error output red
console.error("Database connection failed!");
console.error("Error:", new Error("Invalid user ID"));

//console.warn - warning output yellow/orange
console.warn("API deprecated - please use v2 endpoint");
console.warn("Password strength is weak");

//console.info - informational output blue
console.info("User successfully logged in");
console.info("Loading configuration from config.json");

// With an array of objects
console.table([
  { name: "Alice", age: 25, city: "Mumbai" },
  { name: "Bob", age: 30, city: "Delhi" },
  { name: "Charlie", age: 35, city: "Bangalore" },
]);

// With a simple object
console.table({
  browser: "Chrome",
  version: "118.0",
  os: "Windows",
});

/*
Hello
Chai

chaichai

Database connection failed!
Error: Error: Invalid user ID
    at Object.<anonymous> (C:\_Udemy_Web_Development_repo_2\Udemy_web_development\JSFOUNDATION\part0\printing.js:9:25)
    at Module._compile (node:internal/modules/cjs/loader:1692:14)
    at Object..js (node:internal/modules/cjs/loader:1824:10)
    at Module.load (node:internal/modules/cjs/loader:1427:32)
    at Module._load (node:internal/modules/cjs/loader:1250:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:152:5)
    at node:internal/main/run_main_module:33:47
    
API deprecated - please use v2 endpoint
Password strength is weak

User successfully logged in
Loading configuration from config.json

┌─────────┬───────────┬─────┬─────────────┐
│ (index) │ name      │ age │ city        │
├─────────┼───────────┼─────┼─────────────┤
│ 0       │ 'Alice'   │ 25  │ 'Mumbai'    │
│ 1       │ 'Bob'     │ 30  │ 'Delhi'     │
│ 2       │ 'Charlie' │ 35  │ 'Bangalore' │
└─────────┴───────────┴─────┴─────────────┘
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ browser │ 'Chrome'  │
│ version │ '118.0'   │
│ os      │ 'Windows' │ 
└─────────┴───────────┘    */
