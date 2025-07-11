/*
1. Write a for loop that loops through the array green tea black tea chai oolong tea and stops the loop when it finds chair store all ts before chair in a new array named selected ts
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedteas = [];

for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") {
    break;
  }
  selectedteas.push(teas[index]);
}
console.log(selectedteas);

/*
2. Write a for loop that looks through the array London NY Paris Berlin and skips Paris store the other cities in a new area name visit cities
*/

let cities = ["london", "new york", "paris", "berlin"];
let visitedcities = [];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "paris") {
    continue;
  }
  visitedcities.push(cities[index]);
}
console.log(visitedcities);

/*
3. Use a four of loop to iterate through the array 12345 and stop when the number four is found store the number before four in an array named small numbers
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

/*
4. Cues of 4 of loop to iterate through the array chair green tea herbal tea black tea and skip herbal tea store the other teas in an array named Preferred tea
*/
let tea = ["chai", "green-tea", "herbal tea", "black tea"];
let Preferredtea = [];

for (const chah of tea) {
  if (chah === "herbal tea") {
    continue;
  }
  Preferredtea.push(chah);
}
console.log(Preferredtea);

/*
5. Use a foreign loop to loop through an object containing city populations stop the look when the population of Berlin is found and store all previous cd population in a new object named cd population let cd population equal to London 890,000 New York 840,000 paris 220000 berlin 350000
*/

let cityPopulation = {
  london: 89000,
  new_york: 840000,
  paris: 220000,
  berlin: 350000,
};

let city1 = {};

for (let city in cityPopulation) {
  if (city === "berlin") {
    break;
  }
  city1[city] = cityPopulation[city];
}
console.log(city1);

/*
6. Use of foreign loop to loop through an object containing city population skip any city with a population below 3 million and store the rest in a new object named large city
let worldcities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 35000000,
  paris: 22000000,
};
*/
let worldcities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 35000000,
  paris: 22000000,
};
let largecities = {};

for (const city in worldcities) {
  if (worldcities[city] < 3000000) {
    continue;
  }
  largecities[city] = worldcities[city];
}
console.log(largecities);

/*
7.write a forEach loop that iterates through the array ["earl grey","green tea","chai","oolong tea"].
Stop the loop when chai is found and store all previus tea types in an array named "availableteas"
*/

let TEAcollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableteas = [];

TEAcollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableteas.push(tea);
});
console.log(availableteas);

/*
8.Write a for each loop that iterates through the Harry Baldwin, Tokyo, Sydney, Paris, skip Sydney and store the other cities in a new arena, traveled cities.
*/
let worldcity = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

worldcity.forEach((city) => {
  if (city === "Sydney") {
    return; // skip Sydney
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a for loop that it rates through the array 2579 skip the value 7 and multiply the rest by two store the result in a new array name double the number
*/

let number1 = [2, 5, 7, 9];
let doubledNumber = [];

for (let index = 0; index < number1.length; index++) {
  if (number1[index] === 7) {
    continue;
  }
  doubledNumber.push(number1[index] * 2);
}
console.log(doubledNumber);

/*
10.use a for of loop to iterate through the array chai green tea black tea jasmine tea herbal tea and stop when the length of the current tea nae is greater than 10 store the teas iterated over in an array named shortteas
*/
let chaah = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortteas = [];

for (const tea of chaah) {
  if (tea.lenght > 10) {
    break;
  }
  shortteas.push(tea);
}
console.log(shortteas);
