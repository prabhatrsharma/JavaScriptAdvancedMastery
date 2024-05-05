// Topic: 3.2.32 The spread operator in maps
/* Concepts:
- The spread operator (...) allows the map to be split into single elements.
- It can be used to convert a map into an array by spreading its key-value pairs into separate array elements.
*/

// Code:
let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);

// Checking if petsMap is an instance of Map
console.log(petsMap instanceof Map); // Output: true

// Using spread operator to convert map into an array
let petsArray = [...petsMap]; // Output: [["cats", 1], ["dogs", 3], ["hamsters", 2]]

// Checking if petsArray is an instance of Array
console.log(petsArray instanceof Array); // Output: true

// Explanation: The spread operator (...) is used to split the map into single elements, allowing it to be converted into an array.
