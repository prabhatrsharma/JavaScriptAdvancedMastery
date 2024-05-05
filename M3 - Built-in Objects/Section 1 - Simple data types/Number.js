// Topic: 3.1.4 Number
/* Concepts:
- The Number constructor in JavaScript is used for creating number objects and is associated with the number primitive data type.
- Numbers in JavaScript are floating-point numbers represented in double-precision 64-bit binary format.
- Numbers can be represented in decimal, hexadecimal, octal, and binary formats.
- JavaScript also supports exponential notation for representing numbers.
- Floating-point numbers may lead to approximations due to the limitations of the floating-point format.
- Special values associated with numbers are Infinity and NaN (Not a Number).
*/

// Code:
// Example demonstrating different number formats and their properties
let a = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2

// Example demonstrating approximations and special number values
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1)); // -> 0.9
console.log(x / 0); // -> Infinity
console.log(x / "abc"); // -> NaN