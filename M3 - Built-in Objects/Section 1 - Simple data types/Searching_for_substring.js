// Topic: 3.1.15 Searching for substrings
/* Concepts:
- The includes method checks if a substring exists within a string and returns true or false.
- The indexOf method returns the index of the first occurrence of a substring within a string.
- The lastIndexOf method returns the index of the last occurrence of a substring within a string.
*/

// Code:
// Example demonstrating the includes, indexOf, and lastIndexOf methods
let text = "One, two, three, one, two, three.";
console.log(text.includes("two")); // Output: true
console.log(text.includes("four")); // Output: false
console.log(text.indexOf("two")); // Output: 5
console.log(text.indexOf("four")); // Output: -1
console.log(text.lastIndexOf("two")); // Output: 22
