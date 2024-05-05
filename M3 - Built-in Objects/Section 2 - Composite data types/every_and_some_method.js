// Topic: 3.2.9 The every and some methods
/* Concepts:
- The every method checks if all elements of an array meet a specific condition provided by a testing function.
- The some method checks if at least one element of an array meets a specific condition provided by a testing function.
- Both methods return true if the condition is met for any element (some) or all elements (every), otherwise they return false.
*/

// Code:
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array1.some(item => typeof item === "number");
console.log(anyNumberPresent); // Output: true

let array2 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array2.every(item => item > 0);
console.log(allPositive); // Output: true