// Topic: 3.3.4 Math

/* Concepts:
- The Math object in JavaScript provides mathematical functions and constants.
- It is not a constructor but an ordinary object, accessed directly by name.
- Math contains methods for basic mathematical operations like trigonometry, logarithms, rounding, etc.
*/

// Code:

// Example 1: Using mathematical constants provided by Math object
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045

// Example 2: Using Math methods for basic mathematical operations
console.log(Math.sqrt(16)); // Output: 4 (square root of 16)
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.abs(-5)); // Output: 5 (absolute value of -5)
console.log(Math.ceil(4.1)); // Output: 5 (round up to nearest integer)
console.log(Math.floor(4.9)); // Output: 4 (round down to nearest integer)
console.log(Math.round(4.5)); // Output: 5 (round to nearest integer)
console.log(Math.max(10, 20, 30)); // Output: 30 (maximum value)
console.log(Math.min(10, 20, 30)); // Output: 10 (minimum value)
console.log(Math.random()); // Output: random number between 0 and 1 (exclusive)

// Example 3: Using Math trigonometric methods
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees)
console.log(Math.cos(0)); // Output: 1 (cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tangent of 45 degrees)
console.log(Math.atan(1)); // Output: 0.7853981633974483 (inverse tangent of 1)

// Example 4: Using Math logarithmic methods
console.log(Math.log(Math.E)); // Output: 1 (natural logarithm of e)
console.log(Math.log10(100)); // Output: 2 (base 10 logarithm of 100)
console.log(Math.exp(1)); // Output: 2.718281828459045 (exponential function)