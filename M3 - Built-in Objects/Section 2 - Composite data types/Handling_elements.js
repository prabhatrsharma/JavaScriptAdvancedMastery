// Topic: 3.2.23 Handling elements
/* Concepts:
- The add method in Set objects adds a new element to the Set.
- The delete method in Set objects removes a specified element from the Set. It returns true if the element is successfully deleted, and false if the element doesn't exist in the Set.
- The clear method in Set objects removes all elements from the Set.
*/

// Code:
let petsSet = new Set(["cat", "dog"]);
console.log(petsSet.size); // Output: 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // Output: 4
console.log(petsSet.has("shark")); // Output: true
console.log(petsSet.delete("dog")); // Output: true
console.log(petsSet.delete("dog")); // Output: false
console.log(petsSet.size); // Output: 3
petsSet.clear();
console.log(petsSet.size); // Output: 0

// Explanation: The add, delete, and clear methods in Set objects allow us to add, remove, and clear elements from the Set.