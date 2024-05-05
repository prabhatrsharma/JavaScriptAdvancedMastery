// Topic: 3.2.29 Handling elements
/* Concepts:
- Maps offer methods like set, get, delete, and clear for managing elements.
- set: Adds or updates an element with the specified key-value pair in the map.
- get: Retrieves the value associated with the specified key from the map.
- delete: Removes the element with the specified key from the map.
- clear: Removes all elements from the map.
*/

// Code:
let petsMap = new Map([["cats", 1], ["dogs", 2], ["hamsters", 5]]);
console.log(petsMap.get("hamsters")); // Output: 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // Output: 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // Output: undefined
petsMap.clear();
console.log(petsMap.size); // Output: 0

// Explanation: We use the set, get, delete, and clear methods to add, retrieve, remove, and clear elements in the map.
