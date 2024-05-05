// Topic: 3.2.22 Checking the presence of the element
/* Concepts:
- The size property of a Set object returns the number of elements in the Set.
- The Set constructor has a method called has, which checks if a specified element is present in the Set.
- The has method returns true if the element is found, and false if it's not.
*/

// Code:
let petsSet = new Set(["cat", "dog"]);
console.log(petsSet.has("cat")); // Output: true
console.log(petsSet.has("shark")); // Output: false

// Explanation: The has method in Set objects checks if a specified element exists in the Set.
