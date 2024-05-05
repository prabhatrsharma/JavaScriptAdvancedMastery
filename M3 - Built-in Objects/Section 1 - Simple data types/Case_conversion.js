// Topic: 3.1.12 Case conversion
/* Concepts:
- JavaScript provides the toLowerCase and toUpperCase methods for converting strings to lowercase and uppercase, respectively.
- These methods return a new string with the converted case and do not modify the original string.
*/

// Code:
// Example demonstrating case conversion using toLowerCase and toUpperCase methods
let title = "JavaScript is Fun";
let upperCaseTitle = title.toUpperCase();
let lowerCaseTitle = title.toLowerCase();

console.log(upperCaseTitle); // -> JAVASCRIPT IS FUN
console.log(lowerCaseTitle); // -> javascript is fun