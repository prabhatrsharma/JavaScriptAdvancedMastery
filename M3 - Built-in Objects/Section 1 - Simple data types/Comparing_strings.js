// Topic: 3.1.19 Comparing strings
/* Concepts:
- Strings can be compared using comparison operators like <, >, ==, etc.
- Comparison of strings is done alphabetically based on the order of characters in the alphabet.
- Upper-case letters are treated as coming before lower-case letters in alphabetical order.
- Digits are compared based on their natural order.
- JavaScript may not handle special characters from local alphabets correctly in simple string comparisons.
- The localeCompare method is used for more accurate string comparisons, especially with special characters or different languages.
*/

// Code:
// Example demonstrating string comparison and the use of localeCompare method
console.log("a" < "b"); // Output: true
console.log("abc" < "acd"); // Output: true
console.log("b" < "acd"); // Output: false

console.log("4" < "5"); // Output: true
console.log("2" < "12"); // Output: false
console.log("34" < "332"); // Output: true

console.log("brettesnes" < "Sundsfjord"); // Output: false
console.log("Brettesnes" < "Sundsfjord"); // Output: true

console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // Output: -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // Output: 1