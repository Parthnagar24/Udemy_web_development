//      1.Creating array :
// Method 1: Array literal (most common)
let fruits = ["apple", "banana", "orange"];

// Method 2: Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Method 3: Empty array
let empty = [];

// Method 4: Array with specific length
let fixedLength = new Array(5); // Creates array with 5 empty slots

// Method 5: Array from a string
let fromString = Array.from("hello"); // Converts string to array of characters

/*---------------------------------------------------------------------------------------------------------------*/

//     2.array properties:
let colors = ["red", "green", "blue"];
console.log(colors.length); // Output: 3 (number of elements)

/*----------------------------------------------------------------------------------------------------------------*/

//3.array accessing elements:
let animals = ["cat", "dog", "bird", "fish"];

console.log(animals[0]); // "cat" (first element)
console.log(animals[1]); // "dog" (second element)
console.log(animals[3]); // "fish" (last element)
console.log(animals[4]); // undefined (doesn't exist)

// Last element using length
console.log(animals[animals.length - 1]); // "fish"

//4.modifying arrays:
let cities = ["Paris", "London", "Tokyo"];

// Change existing element
cities[1] = "Berlin";
console.log(cities); // ["Paris", "Berlin", "Tokyo"]

// Add element at specific index
cities[3] = "New York"; // Adds at index 3 (4th position)
console.log(cities); // ["Paris", "Berlin", "Tokyo", "New York"]

//adding elements:
let nums = [1, 2, 3];

// Add to end
nums.push(4); // [1, 2, 3, 4]
nums.push(5, 6); // [1, 2, 3, 4, 5, 6]

// Add to beginning
nums.unshift(0); // [0, 1, 2, 3, 4, 5, 6]

//removing elements:
let items = ["a", "b", "c", "d"];

// Remove from end
let last = items.pop(); // last = "d", items = ["a", "b", "c"]

// Remove from beginning
let first = items.shift(); // first = "a", items = ["b", "c"]

// Remove specific elements
items.splice(1, 1); // Remove 1 element at index 1, items = ["b"]

// Finding Elements:
let names = ["Alice", "Bob", "Charlie", "Bob"];

// Find index of element
console.log(names.indexOf("Bob")); // 1 (first occurrence)
console.log(names.lastIndexOf("Bob")); // 3 (last occurrence)

// Check if element exists
console.log(names.includes("Alice")); // true
console.log(names.includes("David")); // false
// Transforming Arrays:
let original = [1, 2, 3, 4];

// Create new array with transformed elements
let doubled = original.map((x) => x * 2); // [2, 4, 6, 8]

// Filter elements
let evens = original.filter((x) => x % 2 === 0); // [2, 4]

// Reduce to single value
let sum = original.reduce((total, num) => total + num, 0); // 10
// Array Iteration Methods
let fruits2 = ["apple", "banana", "cherry"];

// forEach - execute function for each element
fruits2.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// for...of - iterate over values
for (let fruit of fruits2) {
  console.log(fruit);
}

// for...in - iterate over indices
for (let index in fruits2) {
  console.log(`Index ${index}: ${fruits2[index]}`);
}

// Traditional for loop
for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}
// Multi-dimensional Arrays
// Array of arrays (2D array)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][1]); // 2 (row 0, column 1)
console.log(matrix[2][0]); // 7 (row 2, column 0)
// Array Destructuring
let moreColors = ["red", "green", "blue", "yellow"];

// Extract elements into variables
let [firstColor, secondColor, ...restColors] = moreColors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"
console.log(restColors); // ["blue", "yellow"]
// Common Array Operations
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine arrays
let combined = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
let spread = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Convert to string
console.log(arr1.join(", ")); // "1, 2, 3"
console.log(arr1.toString()); // "1,2,3"

// Reverse array
let reversed = arr1.slice().reverse(); // [3, 2, 1] (slice creates copy)

// Sort array
let words = ["banana", "apple", "cherry"];
words.sort(); // ["apple", "banana", "cherry"]
