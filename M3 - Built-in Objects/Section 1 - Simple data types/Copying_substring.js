// Topic: 3.1.16 Copying substrings
/* Concepts:
- The substr method copies a specified part of a string based on the starting position and length.
- The substring method copies a specified part of a string based on the starting and ending positions.
- The slice method copies a specified part of a string based on the starting and ending positions, allowing negative indices.
*/

// Code:
// Example demonstrating substr, substring, and slice methods for copying substrings
let text = "One, two, three, one, two, three.";
console.log(text.substr(0, 8)); // Output: One, two
console.log(text.substr(10)); // Output: three, one, two, three.
console.log(text.substr(-6)); // Output: three.
console.log(text.substr(-6, 2)); // Output: th

console.log(text.substring(5, 8)); // Output: two
console.log(text.substring(5)); // Output: two, three, one, two, three.
console.log(text.substring(-11, 8)); // Output: One, two

console.log(text.slice(0, 3)); // Output: One
console.log(text.slice(5)); // Output: two, three, one, two, three.
console.log(text.slice(-11)); // Output: two, three.
console.log(text.slice(-11, -8)); // Output: two