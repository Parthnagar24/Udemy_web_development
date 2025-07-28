const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Bob", age: 30 };

function introduce(city, country) {
  console.log(
    `Hi, I'm ${this.name}, ${this.age} years old, from ${city}, ${country}`
  );
}

// CALL - executes immediately, arguments passed separately
introduce.call(person1, "Mumbai", "India");
// Output: Hi, I'm Alice, 25 years old, from Mumbai, India

introduce.call(person2, "London", "UK");
// Output: Hi, I'm Bob, 30 years old, from London, UK

// APPLY - executes immediately, arguments passed as array
introduce.apply(person1, ["Delhi", "India"]);
// Output: Hi, I'm Alice, 25 years old, from Delhi, India

// BIND - returns a new function, doesn't execute immediately
const aliceIntroduce = introduce.bind(person1);
aliceIntroduce("Chennai", "India");
// Output: Hi, I'm Alice, 25 years old, from Chennai, India

// You can also bind with some arguments pre-filled
const bobFromUS = introduce.bind(person2, "New York");
bobFromUS("USA");
// Output: Hi, I'm Bob, 30 years old, from New York, USA
