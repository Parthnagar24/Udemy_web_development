let computer = { cpu: 12 }; //Creates an object named computer with one property:

let lenevo = {
  screen: "HD",
  __proto__: computer,

  /*A new object lenevo is created with:
    Its own property: screen: "HD"
    A prototype that points to computer   */
};

let tomHardware = {}; //Just an empty object — not used further in the code.

console.log(lenevo.cpu); //// Output: 12
//Even though lenevo doesn't directly have cpu, it will look in its prototype (computer), find it there, and return 12.

//lenevo → inherits from → computer

console.log(`lenevo`, lenevo.__proto__); //// Output :lenevo { cpu: 12 }

/*-------------------------------------------------------*/

let genericCar = { tyres: 4 }; // Creates an object genericCar:
let tesla = {
  // A new object tesla with:
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar); //This line sets genericCar as the prototype of tesla.

//tesla → inherits from → genericCar

/*Now, tesla has access to:
tesla.driver → "AI" (own property)
tesla.tyres → 4 (inherited from genericCar)
*/
console.log(`tesla`, Object.getPrototypeOf(tesla)); ////Output : tesla { tyres: 4 }

/*__proto__ → old way to set prototype during object creation

Object.setPrototypeOf(obj, prototype) → modern way to change prototype of an object at runtime

Object.getPrototypeOf(obj) → to view an object’s prototype

 */
