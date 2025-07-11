// ✅ Task 1: Square Numbers using map() and arrow function
const squareNumbers = (arr) => arr.map((num) => num * num);

// ✅ Task 2: Filter Even Numbers using filter() and arrow function
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// ✅ Task 3: Sum of Positive Numbers using filter() and reduce()
const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);

// ✅ Task 4: Transform Array of Objects to get names using map()
const getNames = (arr) => arr.map((obj) => obj.name);

// ✅ Task 5: Find the Longest Word using reduce()
const findLongestWord = (arr) =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
