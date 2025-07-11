let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // false (true AND false)
console.log(isAdult || hasLicense); // true (true OR false)
console.log(!isAdult); // false (NOT true)

let age = 18;
let hasPermission = true;

if (age >= 18 && hasPermission) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
