let result = 5 + 3 * 2; // Multiplication (3 * 2) is done first: 5 + 6 = 11
console.log(result); // 11

let result2 = (5 + 3) * 2; // Parentheses first: 8 * 2 = 16
console.log(result2); // 16

let x = 10;
let y = 5;
let z = 2;
let finalResult = x + (y * z) / 2 - 1; // y * z (10), then 10 / 2 (5), then x + 5 (15), then 15 - 1 (14)
console.log(finalResult); // 14
