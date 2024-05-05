// Topic: 3.3.5 Rounding

/* Concepts:
- Rounding is a common mathematical operation used to approximate numbers to a specific value or precision.
- JavaScript provides several rounding methods in the Math object: ceil, floor, and round.
- ceil: Rounds up to the nearest integer greater than or equal to the given number.
- floor: Rounds down to the nearest integer less than or equal to the given number.
- round: Rounds to the nearest integer, using standard arithmetic rounding rules (up if decimal >= 0.5, down otherwise).
*/

// Code:

// Example 1: Using ceil, floor, and round methods for rounding
console.log(Math.ceil(10.2)); // Output: 11
console.log(Math.floor(10.2)); // Output: 10
console.log(Math.round(10.2)); // Output: 10

// Example 2: Rounding decimal numbers
console.log(Math.ceil(10.499999)); // Output: 11 
console.log(Math.floor(10.499999)); // Output: 10
console.log(Math.round(10.499999)); // Output: 10

// Example 3: Rounding edge cases (0.5)
console.log(Math.ceil(10.5)); // Output: 11
console.log(Math.floor(10.5)); // Output: 10
console.log(Math.round(10.5)); // Output: 11

// Example 4: Rounding larger numbers
console.log(Math.ceil(10.8)); // Output: 11
console.log(Math.floor(10.8)); // Output: 10
console.log(Math.round(10.8)); // Output: 11
