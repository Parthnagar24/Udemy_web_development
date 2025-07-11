// Number

let balance = 120;
let anotherBalance = new Number(120); // [Number: 120]

//console.log(typeof balance); // Number
//console.log(typeof anotherBalance);
//console.log(anotherBalance.valueOf());

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstname;
let lastname = undefined;
let secondname = null;
//console.log(secondname);
//console.log(lastname);
//console.log(firstname); //undefined

// String

let myString = "hello";
let mystring = "hola";
let myStrinG = "big";

let oldGreet = myStrinG + " " + "e";
//console.log(oldGreet);
let greet = `Hello ${myStrinG} !`;
//console.log(greet);
let demo = `value is ${2 * 2}`;
//console.log(demo);

// Symbol

let sm1 = Symbol("code");
let sm2 = Symbol("code");

console.log(sm1 == sm2);
console.log(sm1);

console.log(typeof null);
