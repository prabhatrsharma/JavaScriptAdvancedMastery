// Topic: 3.3.1 JSON, Math, and RegExp
/* Concepts:
- JSON (JavaScript Object Notation) is a text-based data interchange format.
- It is commonly used for exchanging data between a server and a web application.
- JSON is a lightweight and easy-to-read format for representing structured data.
- Math is a built-in object in JavaScript that provides mathematical functions and constants.
- It includes methods for basic mathematical operations like addition, subtraction, multiplication, etc.
- The RegExp (Regular Expression) object is used for matching text patterns within strings.
- Regular expressions are powerful tools for text manipulation and pattern matching in JavaScript.
*/

// Code for JSON:
// JSON example object
let person = {
    name: "Prabhat",
    age: 20,
    city: "Mumbai"
};

// Converting JavaScript object to JSON string
let personJSON = JSON.stringify(person);
console.log(personJSON); // Output: {"name":"Sharma","age":20,"city":"Mumbai"}

// Converting JSON string back to JavaScript object
let personObject = JSON.parse(personJSON);
console.log(personObject); // Output: { name: 'John', age: 30, city: 'New York' }

// Code for Math:
// Math example functions
let x = 5;
let y = 10;

// Math methods for basic operations
console.log(Math.abs(-5)); // Output: 5 (absolute value)
console.log(Math.max(x, y)); // Output: 10 (maximum value)
console.log(Math.min(x, y)); // Output: 5 (minimum value)
console.log(Math.pow(x, 2)); // Output: 25 (x to the power of 2)
console.log(Math.sqrt(25)); // Output: 5 (square root)

// Code for RegExp:
// RegExp example pattern matching
let str = "Hello World!";
let pattern = /hello/i; // Case-insensitive search for "hello"

// Using RegExp test method to check if pattern exists in string
console.log(pattern.test(str)); // Output: true

// Using RegExp exec method to get match information
let result = pattern.exec(str);
console.log(result); // Output: [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]

// Explanation: JSON is used for data interchange, Math provides mathematical functions, and RegExp is used for pattern matching in strings.