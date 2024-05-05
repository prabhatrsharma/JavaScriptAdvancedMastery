// Topic: 3.1.5 Number Constructors
/* Concepts:
- The Number constructor in JavaScript is used for creating number objects and converting values to numbers.
- Number objects can be created explicitly using the new operator or implicitly during autoboxing.
- The toString method of Number objects converts numbers to string representations in various formats, such as decimal, hexadecimal, octal, etc.
- The valueOf method of Number objects returns the primitive value of the number.
*/

// Code:
// Example demonstrating different ways of using the Number constructor and methods
let nrStr1 = (11).toString(); // Implicit autoboxing and calling toString method
let nrStr2 = (11).toString(16); // Explicitly specifying hexadecimal format
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr2 : string : b

// Example demonstrating explicit creation of Number objects and conversion
let numberObj1 = new Number; // Implicit value 0
let numberObj2 = new Number(100); // Value 100
let numberObj3 = new Number("200"); // Value 200
let numberObj4 = new Number("abcd"); // NaN (Not a Number)
let numberObj5 = new Number(9e10000); // Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0

// Example demonstrating conversion using Number constructor without new operator
let nr = Number("100"); // Converting string "100" to number
console.log(`nr : ${typeof nr} : ${ nr}`); // -> nr : number : 100