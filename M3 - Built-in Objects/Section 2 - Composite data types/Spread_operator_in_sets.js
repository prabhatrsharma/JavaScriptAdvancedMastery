// Topic: 3.2.25 The spread operator in sets
/* Concepts:
- The spread operator (...) in sets, as in arrays, is used to split the collection into individual elements.
- It can be used, for example, to convert a Set collection to an array or to pass the elements as function arguments.
*/

// Code:
let petsSet = new Set(["cat", "dog", "hamster"]); // Output: {"cat", "dog", "hamster"}
console.log(petsSet instanceof Set); // Output: true

// Using the spread operator to convert the Set to an array
let petsArray = [...petsSet]; // Output: ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // Output: true

// Explanation: The spread operator (...) in sets allows converting a Set collection to an array by splitting the elements.