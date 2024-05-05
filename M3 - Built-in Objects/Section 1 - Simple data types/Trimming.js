// Topic: 3.1.18 Trimming
/* Concepts:
- The trim method removes leading and trailing whitespace characters from a string.
- The trimStart or trimLeft method removes leading whitespace characters from a string.
- The trimEnd or trimRight method removes trailing whitespace characters from a string.
- Trimming is commonly used to clean up user input or manipulate strings where whitespace needs to be removed.
*/

// Code:
// Example demonstrating trim, trimStart, and trimEnd methods for trimming strings
let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimLeft().length); // Output: 8 (leading whitespace removed)
console.log(city.trimRight().length); // Output: 7 (trailing whitespace removed)
console.log(city.trim().length); // Output: 6 (leading and trailing whitespace removed)
console.log(street.trim().length); // Output: 10 (no leading or trailing whitespace)