// Topic: 3.2.28 Checking the presence of the element
/* Concepts:
- The has method of the Map constructor is used to check if a map contains an element with a specific key.
- It returns true if the key is present in the map, otherwise false.
- The has method only checks for the presence of the key, not its value.
*/

// Code:
let petsMap = new Map([["cats", 1], ["dogs", 2], ["hamsters", 5]]);
console.log(petsMap.has("dogs")); // Output: true
console.log(petsMap.has("sharks")); // Output: false
console.log(petsMap.has(1)); // Output: false

// Explanation: The has method is used to check if a key exists in the map collection, returning true if found and false if not.
