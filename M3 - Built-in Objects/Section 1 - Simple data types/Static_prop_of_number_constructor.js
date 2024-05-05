// Topic: 3.1.7 Static properties and methods of the Number constructor
/* Concepts:
- The Number constructor provides static properties like MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, and MIN_SAFE_INTEGER.
- Static methods like Number.isInteger, Number.isSafeInteger, Number.isFinite, parseInt, and parseFloat are used for various numerical checks and conversions.
- These static methods offer convenience and error handling when working with numerical data.
*/

// Code:
// Example demonstrating usage of static properties and methods of the Number constructor
console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

let numbers = [2e100, 200000, 1.5, Infinity];
for (let i = 0; i < numbers.length; i++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN
