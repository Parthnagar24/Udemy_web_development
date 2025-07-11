/* 
1.Write a while loop that calculates the sum of all numbers from one to 5 and stores the result in a variable named sum */

let sum = 0;
let number = 1;
while (number <= 5) {
  //n1 2 3 4  5
  sum += number; // 0+1 1+2 1+2+3 1+2+3+4 1+2+3+4+5
  number++; //2  3 4 5 6false
}
console.log(sum); // sum = 1+2+3+4+5 = 15

/*
2. Write a while Loop that counts down from five to 1 and stores the number in an array named countdown
*/

let i = 5;
let countdown = [];
E;

while (i >= 1) {
  countdown.push(i); // push
  i--;
}
console.log(countdown);

/*
3. Write a do while loop that prompts a user to enter their favourite T type until they enter stock store each T type in an array named T Collection

let teaCollection = [];
let favouriteTeatype;
do {
  favouriteTeatype = prompt(`enter your favourite tea (type "stop" to finish)`);
  if (favouriteTeatype !== stop) {
    teaCollection.push(favouriteTeatype);
  }
} while (favouriteTeatype != stop);

console.log(teaCollection);  */

/*
4. Writer Duvall loop that adds number from one to three and stores the result in a variable name total
*/

let number2 = 1;
let total = 0;
do {
  total += number2;
  number2++;
} while (number2 <= 3);
console.log(total);

/*
5. Write a for loop that multiplies each element in an array 246 by two and stores the result in a new array named multiplied numbers
*/

let array = [2, 4, 6];
let multipliedNumbers = [];
//for(initPhase; condition ; incre/decre)
for (let index = 0; index < array.length; index++) {
  /* method 1
    n = array[index] * 2;
  multipliedNumbers.push(n); */
  //method 2
  multipliedNumbers.push(array[index] * 2);
}
console.log(multipliedNumbers);

/*
6. Write a for loop that lists all the cities in the array paris New York Tokyo London and stores each city in a new array named city list
*/

let cities = ["Paris", "new york", "berlin"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const cities2 = cities[c];
  cityList.push(cities2);
}
console.log(cityList);
