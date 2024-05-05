// Topic: 3.1.1 Simole data types
/*JavaScript Primitive Data Types and Corresponding Built-in Objects*/

/*1. Boolean
Represents true or false values.*/

let isTrue = true; // Boolean primitive
let boolObj = new Boolean(isTrue); // Boolean object

console.log(boolObj.valueOf()); // Output: true

/*2. Number
Represents numeric values, including integers and floating-point numbers.*/

let numValue = 42; // Number primitive
let numObj = new Number(numValue); // Number object

console.log(numObj.toFixed(2)); // Output: 42.00

/*3. String
Represents text and is enclosed in single or double quotes.*/

let strValue = "Hello, JavaScript!"; // String primitive
let strObj = new String(strValue); // String object

console.log(strObj.length); // Output: 18

/*4. Undefined and Null
Undefined represents a variable that has been declared but not assigned a value.
Null represents the intentional absence of any object value.*/

let undefVar; // Undefined variable
let nullVar = null; // Null variable

console.log(typeof undefVar); // Output: undefined
console.log(typeof nullVar); // Output: object

/*5. Symbol (ES6+)
Represents a unique and immutable value, introduced in ECMAScript 6.*/

let sym = Symbol('description'); // Symbol primitive
let symObj = Object(sym); // Symbol object

console.log(symObj.toString()); // Output: [object Symbol]