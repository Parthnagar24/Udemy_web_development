let person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};

function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner(); // Calling inner from within outer
}

console.log(outer());

console.log(person.introduce());
