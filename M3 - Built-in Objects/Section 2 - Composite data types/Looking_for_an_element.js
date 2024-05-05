// Topic: 3.2.15 Looking for an element
/* Concepts:
- The Array constructor provides methods like includes, indexOf, and lastIndexOf for searching specific items in an array.
- The includes method returns true if the item is found, otherwise false.
- The indexOf method returns the index of the first occurrence of the item, or -1 if not found (search starts from the left).
- The lastIndexOf method returns the index of the last occurrence of the item, or -1 if not found (search starts from the right).
- Advanced search methods find and findIndex take a testing function and search for items based on the condition defined in the function.
- The find method returns the first element that meets the condition, or undefined if not found.
- The findIndex method returns the index of the first element that meets the condition, or -1 if not found.
*/

// Code:
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // Output: true
console.log(myPets.includes("unicorn")); // Output: false
console.log(myPets.indexOf("dog")); // Output: 1
console.log(myPets.lastIndexOf("dog")); // Output: 6
console.log(myPets.indexOf("unicorn")); // Output: -1

console.log(myPets.find(item => item.length > 3)); // Output: hamster
console.log(myPets.find(item => item.includes("og"))); // Output: dog
console.log(myPets.find(item => item.includes("fish"))); // Output: undefined
console.log(myPets.findIndex(item => item.length > 3)); // Output: 2
console.log(myPets.findIndex(item => item.includes("og"))); // Output: 1
console.log(myPets.findIndex(item => item.includes("fish"))); // Output: -1

// Explanation: The example demonstrates various methods for searching elements in an array.