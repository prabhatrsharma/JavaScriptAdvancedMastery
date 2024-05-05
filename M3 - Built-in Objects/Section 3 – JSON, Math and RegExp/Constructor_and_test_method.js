// Topic: 3.3.9 Constructor and test method

/* Concepts:
- Regular expressions can be created in JavaScript using the RegExp constructor or using a shortened notation with literals and slashes (/).
- The test method of the RegExp object is used to check if a string matches the regular expression pattern.
- If the string matches the pattern, the test method returns true; otherwise, it returns false.
*/

// Code:

// Example 1: Using RegExp constructor
let re1 = new RegExp('c.t'); // Regular expression using the RegExp constructor
console.log(re1.test("cat")); // Output: true
console.log(re1.test("cut")); // Output: true
console.log(re1.test("ct")); // Output: false

// Example 2: Using literal notation
let re2 = /c.t/; // Regular expression using literal notation
console.log(re2.test("cat")); // Output: true
console.log(re2.test("cut")); // Output: true
console.log(re2.test("ct")); // Output: false