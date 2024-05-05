// Topic: 3.2.16 Copying a selected part of the array
/* Concepts:
- The slice method allows copying a selected part of an array.
- It takes one or two arguments:
  - The first argument determines the start index of the copied fragment.
  - If the first argument is negative, the index is counted from the end of the array.
  - The second argument is the end index of the copied fragment (element at this index is not included).
  - If the second argument is omitted, the method copies from the start index to the end of the array.
- The slice method returns a copy of the selected part of the array without affecting the original array.
*/

// Code:
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets.slice(3); // Output: ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5); // Output: ["canary", "shark"]
let p3 = myPets.slice(-3); // Output: ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1); // Output: ["shark", "cat"]

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

// Explanation: The example demonstrates the usage of the slice method to copy selected parts of an array.