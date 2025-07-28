function createCounter() {
  let count = 0; // This variable is "captured" by the closure

  return function () {
    count++; // The inner function can access and modify 'count'
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3

counter2(); // 1 (separate counter with its own 'count' variable)
counter2(); // 2
