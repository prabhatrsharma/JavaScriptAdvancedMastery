// Topic: 3.2.10 Filtering
/* Concepts:
- The filter method creates a new array containing elements that pass a specific condition provided by a testing function.
- The original array remains unchanged; filter only copies elements that pass the test.
*/

// Code:
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array1.length); // Output: 9
let numbers = array1.filter(item => typeof item === "number");
console.log(numbers.length); // Output: 7
console.log(array1.length); // Output: 9