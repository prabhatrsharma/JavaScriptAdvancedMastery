// Topic: 3.3.6 Drawing numbers

/* Concepts:
- Generating random numbers is often needed in programming for various applications like games, simulations, or cryptography.
- Math.random() is a method in the Math object that generates a pseudo-random number in the range [0, 1) (0 inclusive, 1 exclusive).
- To generate random integers within a specific range, we can create a custom function using Math.random().
- The function randomInteger(min, max) generates random integers from min (inclusive) to max (exclusive).
- To include max in the range, modify the randomInteger function to randomIntegerInclusive(min, max).
*/

// Code:

// Example 1: Generating a random number between 0 and 1
console.log(Math.random()); // Output: ? (a random decimal number between 0 and 1)

// Example 2: Generating random integers within a range (excluding max)
let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // Output: ? (a random integer between 10 and 19)

// Example 3: Generating random integers within a range (including max)
let randomIntegerInclusive = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
console.log(randomIntegerInclusive(10,20)); // Output: ? (a random integer between 10 and 20, inclusive)