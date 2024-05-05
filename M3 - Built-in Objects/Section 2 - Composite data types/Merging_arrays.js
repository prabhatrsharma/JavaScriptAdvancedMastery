// Topic: 3.2.4 Merging arrays

/* Concepts:
- The concat method is used to combine two arrays into one, creating a new array.
- The original arrays are not modified; instead, a new array is created with elements from both arrays.
- The concat method returns the merged array without affecting the original arrays.
*/

// Code:
// Example demonstrating merging arrays using the concat method
let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // Merging array1 and array2
console.log(array1.length); // Output: 3 (length of array1 remains unchanged)
console.log(array2.length); // Output: 2 (length of array2 remains unchanged)
console.log(array3.length); // Output: 5 (length of merged array3)
console.log(array3[0]); // Output: 10 (first element of merged array3)
console.log(array3[3]); // Output: "cat" (fourth element of merged array3)
