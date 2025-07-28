function addTwo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Adding 2 to ${num}`);
      resolve(num + 2);
    }, 500);
  });
}

function multiplyByThree(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Multiplying ${num} by 3`);
      resolve(num * 3);
    }, 500);
  });
}

function subtractFive(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Subtracting 5 from ${num}`);
      resolve(num - 5);
    }, 500);
  });
}

// Chain the operations
addTwo(10)
  .then((result) => multiplyByThree(result))
  .then((result) => subtractFive(result))
  .then((finalResult) => {
    console.log("Final result:", finalResult);
  });

// Output:
// Adding 2 to 10
// Multiplying 12 by 3
// Subtracting 5 from 36
// Final result: 31
