// Topic: 3.2.6 Adding and removing items – pop and shift

/* Concepts:
- The pop method removes the last element from an array and returns that element.
- The shift method removes the first element from an array and returns that element.
- Both methods modify the original array in place.
*/

// Code:
// Example demonstrating removing items from an array using pop and shift

// Define and initialize the array
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array1.length); // Output: 9 (length of the array before shift)
console.log(array1.shift()); // Output: "cat" (removed element from the beginning of the array)
console.log(array1.length); // Output: 8 (length of the array after shift)
console.log(array1.pop()); // Output: "dog" (removed element from the end of the array)
console.log(array1.length); // Output: 7 (length of the array after pop)