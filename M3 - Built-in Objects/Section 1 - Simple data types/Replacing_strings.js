// Topic: 3.1.14 Replacing substrings
/* Concepts:
- The replaceAll method is used to replace all occurrences of a specified substring with another substring in a string.
- Method chaining is the process of calling multiple methods on an object in a single line of code.
- In method chaining, each subsequent method is executed on the result of the previous method.
*/

// Code:
// Example demonstrating the replaceAll method and method chaining
let text = "JavaScript is a versatile programming language used for web development. It allows for dynamic and interactive web applications. Many modern websites are built using JavaScript to enhance user experience and add functionality.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // Output: 32