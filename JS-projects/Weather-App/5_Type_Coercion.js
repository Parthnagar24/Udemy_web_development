// Type Coercion in JavaScript - One Code Example

console.log("5" + 2);       
// "52" => Number 2 is coerced to string, + operator triggers string concatenation

console.log("5" - 2);       
// 3 => "5" is coerced to number, - operator expects numeric operation

console.log(true + 1);      
// 2 => true is coerced to 1

console.log(false + 10);    
// 10 => false is coerced to 0

console.log(null + 1);      
// 1 => null is coerced to 0

console.log(undefined + 1); 
// NaN => undefined is coerced to NaN

console.log("5" == 5);      
// true => "5" is coerced to number 5 for comparison

console.log("5" === 5);     
// false => no coercion, types are different (string vs number)

console.log(Boolean(""));     
// false => empty string is falsy

console.log(Boolean("false")); 
// true => non-empty strings are always truthy

console.log(Number(""));      
// 0 => empty string coerces to 0

console.log(Number("abc"));   
// NaN => invalid number string

console.log([] + 1);         
// "1" => [] is coerced to empty string, then concatenated with "1"

console.log([1] + 1);        
// "11" => [1] becomes "1", then concatenated with "1"

console.log([1,2] + 1);      
// "1,21" => [1,2] becomes "1,2", then concatenated with "1"
