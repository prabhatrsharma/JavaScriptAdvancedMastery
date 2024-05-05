// Topic: 3.2.7 Adding and removing items without using methods

/* Concepts:
- You can add new elements to an array by directly assigning values to non-existent indexes.
- Deleting elements from an array can be done using the delete operator, but it doesn't update the array length or remove the index itself.
- Deleted elements are replaced with undefined.
*/

// Code:
// Example demonstrating adding and removing items without using array methods

let array1 = [10, 20, 30]; // -> [10, 20, 30]

array1[3] = 100; // -> [10, 20, 30, 100]
array1[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]

delete array1[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array1[1]); // Output: undefined
