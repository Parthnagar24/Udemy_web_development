/*
1. Declare an array named "teaflavours" that contains the strings "green tea" "black tea" and "Oolong tea"
 access the first element of the array and store it in a variable named "firstTea".

 */

let teaflavours = ["green tea", "black tea", "Oolong tea"];
// let teaFL = new Array("green tea", "black tea", "Oolong tea")

let firstTea = teaflavours[0];
console.log(firstTea);

/*
2. Declare a array named cities containing "London" "Tokyo" "Paris" and "New York"
 access the third element in the array and store it in the variable named "FavouriteCity".  */

let cities = ["London", "Tokyo", "Paris", "New York"];
let FavouriteCity = cities[2];
console.log(FavouriteCity);

/*
3. You have an array named Teatypes containing "herbal tea" "white tea " and "masala chai" 
change the second element of the array to "Jasmine Tea" . */

let Teatypes = ["herbal tea", "white tea ", "masala chai"];

Teatypes[1] = "jasmine tea";

console.log(Teatypes);

/*
4. Declare an array named city's visited containing Mumbai and Sydney at Berlin to the array using the push method. */

let citiesVisited = ["Mumbai", "sydney"];
citiesVisited[2] = "Berlin";
console.log(citiesVisited);

citiesVisited.push("berlin");
console.log(citiesVisited);

/*
5. You have an errand named tea orders with chai ice tea matcha and Earl Grey remove the last element of the array using the pop method and store it in a variable name last order" */

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
console.log(teaOrders);

let lastOrder = teaOrders.pop();
console.log(lastOrder);

/*
6. You have an array named populartees containing green tea oolong tea and chai
create a soft copy of this array named softcopytea */

let populartea = ["green tea ", "oolong tea", "chai"];

let softcopytea = populartea;
console.log(softcopytea);

/*
7. you have an array named top cities containing burning Singapore and New York create a hard copy of this area named hard copy cities */

let topCities = ["Berlin", "Singapore", "New York"];
//let hardCopyCities = [...topCities];
let hardCopyCities = topCities.slice();
console.log(hardCopyCities);

/*
8. You have two arrays European cities containing Paris and Rome and Asian cities containing Tokyo and Bangkok merch these two areas into a new array named World Cities*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Bangkok", "Tokyo"];

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

/*
9. You have an array named team menu containing masala tea oolong tea green tea and Earl Grade find the length of the array and store it in a variable name menu length*/

let teaMenu = ["masala chai", "oolong chai", "earl grey"];

let Menulenght = teaMenu.length;

console.log(Menulenght);

/*
10. You have an array named city bucket list containing Kyoto London Cape Town and Vancouver cheque if London is in the array and store the result in a variable named is London in list */

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];

let isLondonINList = cityBucketList.includes("london");
console.log(isLondonINList);
