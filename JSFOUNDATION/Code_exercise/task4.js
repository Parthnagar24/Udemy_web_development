// Task 1: Sum of First N Natural Numbers
function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

// Task 2: Multiplication Table
function printMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

// Task 3: Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return Array.from(str).filter((char) => vowels.includes(char)).length;
}

// ======= Examples =======

console.log("Sum of first 10 natural numbers:", sumOfN(10)); // 55

console.log("Multiplication Table of 5:");
console.log(printMultiplicationTable(5));

console.log(
  "Vowel count in 'JavaScript is Awesome!':",
  countVowels("JavaScript is Awesome!")
); // 8
