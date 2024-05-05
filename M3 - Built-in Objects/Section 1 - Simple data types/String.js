// Topic: 3.1.8 String
/* Concepts:
- The String constructor corresponds to the string primitive and provides a range of prototype methods for string manipulation.
- String objects allow comfortable manipulation of character strings in JavaScript.
*/

// Code:
// Example demonstrating basic usage of the String constructor and prototype methods
let str = new String("Hello, world!");

console.log(str.length); // -> 13
console.log(str.charAt(0)); // -> H
console.log(str.charCodeAt(0)); // -> 72
console.log(str.toUpperCase()); // -> HELLO, WORLD!
console.log(str.toLowerCase()); // -> hello, world!
console.log(str.indexOf("world")); // -> 7
console.log(str.slice(7, 12)); // -> world
console.log(str.substring(7, 12)); // -> world
console.log(str.substr(7, 5)); // -> world
console.log(str.split(" ")); // -> [ 'Hello,', 'world!' ]
console.log(str.replace("world", "JavaScript")); // -> Hello, JavaScript!
console.log(str.concat(" Have a nice day!")); // -> Hello, world! Have a nice day!
console.log(str.trim()); // -> Hello, world!
console.log(str.startsWith("Hello")); // -> true
console.log(str.endsWith("world!")); // -> true
console.log(str.includes("world")); // -> true