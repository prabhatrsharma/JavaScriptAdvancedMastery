// Topic: 3.3.11 String constructor methods using RegExp

/* Concepts:
- The String constructor methods search, match, and replace can be used with regular expressions to perform operations on strings.
- The search method returns the index of the first match of the regular expression in the string.
- The match method returns an array with information about the first match of the regular expression in the string.
- The replace method replaces matches of a regular expression in the string with a specified replacement string.
- Operations on strings using these methods do not modify the original string; they return a new string with the specified changes.
*/

// Code:

let re = /c.t/;
let str = "dog and cat";
console.log(str.match(re)); // Output: ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(re)); // Output: 8
console.log(str.replace(re, 'unicorn')); // Output: dog and unicorn
console.log(str); // Output: dog and cat