// Topic: 3.3.7 Other useful methods

/* Concepts:
- The Math object in JavaScript provides several useful methods for mathematical operations.
- Math.abs() returns the absolute value of a number.
- Math.min() and Math.max() are used to find the smallest or largest value among given numbers or an array of numbers.
- Math.pow() calculates the power of a number.
- Math.sqrt() calculates the square root of a number.
- Math.log(), Math.log2(), and Math.log10() calculate natural logarithm, logarithm at base 2, and logarithm at base 10 respectively.
- Math trigonometric functions like Math.cos(), Math.sin(), Math.tan(), etc., operate on radians, not degrees.

*/

// Code:

// Example 1: Math.abs() method
console.log(Math.abs(-3.25)); // Output: 3.25
console.log(Math.abs(10)); // Output: 10

// Example 2: Math.min() and Math.max() methods
console.log(Math.min(100, 20, 300, 10, 400)); // Output: 10 (smallest value)
let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers)); // Output: 400 (largest value)

// Example 3: Math.pow() method
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(4, 2)); // Output: 16
console.log(Math.pow(4, -1)); // Output: 0.25
console.log(Math.pow(4, -2)); // Output: 0.0625
console.log(Math.pow(4, 0.5)); // Output: 2
console.log(Math.pow(-1, 0.5)); // Output: NaN (Not a Number)
console.log(Math.sqrt(4)); // Output: 2

// Example 4: Logarithmic methods
let x = Math.pow(Math.E, 2);
console.log(Math.log(x)); // Output: 2 (natural logarithm)
console.log(Math.log2(16)); // Output: 4 (logarithm base 2)
console.log(Math.log10(1000)); // Output: 3 (logarithm base 10)

// Example 5: Trigonometric functions
console.log(Math.cos(Math.PI / 3)); // Output: 0.5
console.log(Math.tan(Math.PI / 4)); // Output: 1
console.log(Math.asin(1)); // Output: 1.5707963267948966 (in radians)