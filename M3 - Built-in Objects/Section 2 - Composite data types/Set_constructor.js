// Topic: 3.2.21 The Set constructor
/* Concepts:
- The Set constructor can be called without arguments to create an empty Set collection.
- It can also accept an array as an argument, with its elements automatically added to the Set.
- Set collections automatically handle duplicate elements, keeping only unique values.
- The size property of a Set object returns the number of elements in the Set.
*/

// Code:
let emptySet = new Set();
console.log(emptySet); // Output: Set(0) {}
console.log(emptySet.size); // Output: 0

let petsSet = new Set(["cat", "dog", "cat"]);
console.log(petsSet); // Output: Set(2) { 'cat', 'dog' }
console.log(petsSet.size); // Output: 2

// Explanation: The Set constructor can create an empty Set or initialize it with elements from an array.