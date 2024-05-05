// Topic: 3.2.11 Mapping elements
/* Concepts:
- The map method creates a new array by applying a transformation function to each element of the original array.
- The new array has the same length as the original one.
*/

// Code:
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1
  .filter(item => typeof item === "number")
  .map(item => item * item);

console.log(squarePower); // Output: [8100, 6400, 100, 400, 900, 10000, 2500]