/* 1. Write a while loop that calculates the sum of all numbers from one to 5 and stores the result in a variable named sum */
let sum = 0;
let number = 1;
while (number <= 5) {
  sum += number; // 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
  number++; // 1, 2, 3, 4, 5, then 6 (condition becomes false)
}
console.log(sum); // Output: 15

/* 2. Write a while Loop that counts down from five to 1 and stores the number in an array named countdown */
let i = 5;
let countdown = [];

while (i >= 1) {
  countdown.push(i);
  i--;
}
console.log(countdown); // Output: [5, 4, 3, 2, 1]

/* 3. Write a do while loop that prompts a user to enter their favourite tea type until they enter "stop" and store each tea type in an array named userTeaCollection */
let userTeaCollection = [];
let favouriteTeaType;

do {
  favouriteTeaType = prompt('Enter your favourite tea (type "stop" to finish)');
  if (favouriteTeaType !== "stop") {
    userTeaCollection.push(favouriteTeaType);
  }
} while (favouriteTeaType !== "stop");

console.log(userTeaCollection);

/* 4. Write a do-while loop that adds numbers from one to three and stores the result in a variable named total */
let number2 = 1;
let total = 0;

do {
  total += number2; // 0+1=1, 1+2=3, 3+3=6
  number2++;
} while (number2 <= 3);

console.log(total); // Output: 6

/* 5. Write a for loop that multiplies each element in an array [2,4,6] by two and stores the result in a new array named multipliedNumbers */
let array = [2, 4, 6];
let multipliedNumbers = [];

// for (initialization; condition; increment/decrement)
for (let index = 0; index < array.length; index++) {
  // Method 1
  // let n = array[index] * 2;
  // multipliedNumbers.push(n);

  // Method 2 (more concise)
  multipliedNumbers.push(array[index] * 2);
}
console.log(multipliedNumbers); // Output: [4, 8, 12]

/* 6. Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named cityList */
let cities1 = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities1.length; c++) {
  const currentCity = cities1[c];
  cityList.push(currentCity);
}
console.log(cityList); // Output: ["Paris", "New York", "Tokyo", "London"]

/*
1. Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] 
   and stops the loop when it finds "chai". Store all teas before "chai" in a new array named selectedTeas
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") {
    break;
  }
  selectedTeas.push(teas[index]);
}
console.log(selectedTeas); // Output: ["green tea", "black tea"]

/*
2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] 
   and skips "Paris". Store the other cities in a new array named visitedCities
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "Paris") {
    continue;
  }
  visitedCities.push(cities[index]);
}
console.log(visitedCities); // Output: ["London", "New York", "Berlin"]

/*
3. Use a for...of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found.
   Store the numbers before 4 in an array named smallNumbers
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers); // Output: [1, 2, 3]

/*
4. Use a for...of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] 
   and skip "herbal tea". Store the other teas in an array named preferredTeas
*/
let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const currentTea of tea) {
  if (currentTea === "herbal tea") {
    continue;
  }
  preferredTeas.push(currentTea);
}
console.log(preferredTeas); // Output: ["chai", "green tea", "black tea"]

/*
5. Use a for...in loop to loop through an object containing city populations. 
   Stop the loop when "berlin" is found and store all previous city populations in a new object named cityPopulations
*/
let cityPopulation = {
  london: 890000,
  new_york: 840000,
  paris: 220000,
  berlin: 350000,
};

let cityPopulations = {};

for (let city in cityPopulation) {
  if (city === "berlin") {
    break;
  }
  cityPopulations[city] = cityPopulation[city];
}
console.log(cityPopulations);
// Output: {london: 890000, new_york: 840000, paris: 220000}

/*
6. Use a for...in loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named largeCities
*/
let worldCities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 3500000,
  paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);
// Output: {sydney: 5000000, tokyo: 9000000, berlin: 3500000}

/*
7. Write a forEach loop that iterates through the array ["earl grey","green tea","chai","oolong tea"].
   Stop the loop when "chai" is found and store all previous tea types in an array named "availableTeas"
   
   NOTE: forEach cannot be stopped with break, so we use a flag variable instead
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return; // This only skips the current iteration, doesn't stop the loop
  }
  availableTeas.push(tea);
});
console.log(availableTeas);
// Output: ["earl grey", "green tea", "oolong tea"] (Note: forEach continues after chai)

// Better approach for stopping at "chai":
let teaCollection2 = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas2 = [];
let foundChai = false;

teaCollection2.forEach(function (tea) {
  if (foundChai || tea === "chai") {
    foundChai = true;
    return;
  }
  availableTeas2.push(tea);
});
console.log(availableTeas2); // Output: ["earl grey", "green tea"]

/*
8. Write a forEach loop that iterates through ["Berlin", "Tokyo", "Sydney", "Paris"], 
   skip "Sydney" and store the other cities in a new array named traveledCities.
*/
let worldCity = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

worldCity.forEach((city) => {
  if (city === "Sydney") {
    return; // skip Sydney
  }
  traveledCities.push(city);
});
console.log(traveledCities); // Output: ["Berlin", "Tokyo", "Paris"]

/*
9. Write a for loop that iterates through the array [2,5,7,9], skip the value 7, 
   and multiply the rest by 2. Store the result in a new array named doubledNumbers
*/
let numbers1 = [2, 5, 7, 9];
let doubledNumbers = [];

for (let index = 0; index < numbers1.length; index++) {
  if (numbers1[index] === 7) {
    continue;
  }
  doubledNumbers.push(numbers1[index] * 2);
}
console.log(doubledNumbers); // Output: [4, 10, 18]

/*
10. Use a for...of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named shortTeas
*/
let teaTypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaTypes) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas); // Output: ["chai", "green tea", "black tea"]
