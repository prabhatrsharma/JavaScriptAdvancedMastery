// Topic: 3.2.27 The Map constructor
/* Concepts:
- The Map constructor is used to create collections of key:value pairs.
- Each element in the collection consists of a unique key and a corresponding value.
- Keys and values can be of any type.
- Maps can be initialized with an array of arrays, where each inner array contains a key:value pair.
- The size property of maps indicates the number of key:value pairs in the map.
*/

// Code:
let emptyMap = new Map();
let petsMap = new Map([["cats", 1], ["dogs", 2], ["hamsters", 5]]);
console.log(emptyMap.size); // Output: 0
console.log(petsMap.size); // Output: 3

// Explanation: The Map constructor allows us to create collections of key:value pairs, initializing them with an array of arrays where each inner array represents a key:value pair.