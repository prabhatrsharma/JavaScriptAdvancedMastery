// Topic: 3.3.8 RegExp

/* Concepts:
- The RegExp constructor is used to create objects representing regular expressions.
- Regular expressions are search patterns used for pattern matching in strings.
- Regular expressions are commonly used for tasks like validation, searching, and replacing text patterns.
- Metacharacters like dot (.), asterisk (*), plus (+), question mark (?), etc., have special meanings in regular expressions.

*/

// Code:

// Example 1: Using RegExp constructor
let pattern = /c.t/; // Regular expression pattern
let str1 = "haircut";
let str2 = "caterpillar";
console.log(pattern.test(str1)); // Output: true
console.log(pattern.test(str2)); // Output: true

// Example 2: Using RegExp object methods
let emailPattern = /\S+@\S+\.\S+/; // Regular expression for email validation
let email = "example@email.com";
console.log(emailPattern.test(email)); // Output: true

// Example 3: Using RegExp with String methods
let text = "Hello, World!";
let searchPattern = /hello/i; // Case-insensitive search
console.log(text.match(searchPattern)); // Output: ["Hello"]