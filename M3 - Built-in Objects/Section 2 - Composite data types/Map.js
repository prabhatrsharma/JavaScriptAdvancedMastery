// Topic: 3.2.26 Map
/* Concepts:
- The Map constructor is used to create a collection of key:value pairs.
- Each element in the collection consists of a unique key and a corresponding value.
- Keys in maps can be of any type, and values can also be of any type.
- Adding a new element with an existing key will overwrite the existing value.
- The order of elements in a map does not matter.
*/

// Code:
let myMap = new Map(); // Output: {}
console.log(myMap instanceof Map); // Output: true

// Adding key:value pairs to the map
myMap.set("name", "Prabhat");
myMap.set(1, "One");
myMap.set(true, "Yes");

// Accessing values using keys
console.log(myMap.get("name")); // Output: Prabhat
console.log(myMap.get(1)); // Output: One
console.log(myMap.get(true)); // Output: Yes

// Checking if a key exists in the map
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age")); // Output: false

// Deleting a key:value pair from the map
myMap.delete(1); // Output: true (if key exists)
console.log(myMap.has(1)); // Output: false

// Clearing all key:value pairs from the map
myMap.clear(); // Output: {}
console.log(myMap.size); // Output: 0

// Explanation: The Map constructor is used to create collections of key:value pairs, allowing for versatile data storage and manipulation.