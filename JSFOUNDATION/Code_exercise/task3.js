// Task 1: Array Filtering - return only numbers from a mixed array
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

// Task 2: Array Reversal - reverse the array
function reverseArray(arr) {
  return arr.slice().reverse(); // avoid modifying original array
}

// Task 3: Find Maximum in an Array - return the largest number
function findMax(arr) {
  return Math.max(...arr);
}

// Task 4: Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Task 5: Flatten a Nested Array - returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// ======= Examples =======

// Task 1
console.log(
  "Filtered Numbers:",
  filterNumbers(["a", 10, true, 5, "hello", 99])
);

// Task 2
console.log("Reversed Array:", reverseArray([1, 2, 3, 4]));

// Task 3
console.log("Max Number:", findMax([1, 99, 25, 6]));

// Task 4
console.log("Without Duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Task 5
console.log("Flattened Array:", flattenArray([1, [2, [3, 4], 5], 6]));
