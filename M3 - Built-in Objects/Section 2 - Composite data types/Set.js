// Topic: 3.2.20 Set
/* Concepts:
- The Set constructor is used to create a collection of unique elements where each element occurs only once.
- Set collections do not guarantee the order of elements, and elements do not have defined positions like arrays.
- Attempts to add duplicate elements to a Set are ignored.
- Set collections are useful for storing unique values and checking for the presence of specific elements.
*/

// Code:
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Duplicate element, will be ignored

console.log(mySet); // Output: Set(3) { 1, 2, 3 }

console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

mySet.delete(2);
console.log(mySet); // Output: Set(2) { 1, 3 }

mySet.clear();
console.log(mySet); // Output: Set(0) {}

// Explanation: Sets are used to store unique elements, providing methods to add, check, delete, and clear elements in the collection.