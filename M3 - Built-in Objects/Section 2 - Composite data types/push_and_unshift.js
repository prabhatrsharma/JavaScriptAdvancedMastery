// Topic: 3.2.5 Adding and removing items – push and unshift

/* Concepts:
- The push method adds one or more elements to the end of an array.
- The unshift method adds one or more elements to the beginning of an array.
- Both methods modify the original array in place.
*/

// Code:
// Example demonstrating adding items to an array using push and unshift
let array1 = [10, 20, 30]; // Original array
console.log(array1); // Output: [10, 20, 30]
array1.push(100); // Adding 100 at the end
console.log(array1); // Output: [10, 20, 30, 100]
array1.push(50, "dog"); // Adding 50 and "dog" at the end
console.log(array1); // Output: [10, 20, 30, 100, 50, "dog"]
array1.unshift("cat", 90, 80); // Adding "cat", 90, and 80 at the beginning
console.log(array1); // Output: ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]
