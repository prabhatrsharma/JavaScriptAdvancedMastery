// Topic: 3.2.19 The spread operator in arrays
/* Concepts:
- The spread operator (...) in arrays is used to expand an array into individual elements.
- It can be used to create a new array by combining existing arrays or elements.
- The spread operator can also be used to pass array elements as arguments to functions.
*/

// Code:
let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; // Output: [10, 20, 100, 200, 300, 500, 1000, 2000]

// Spread operator in function arguments
let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.log(testFn(...array)); // Output: 100

// Explanation: The spread operator simplifies the process of combining arrays or passing array elements as function arguments.