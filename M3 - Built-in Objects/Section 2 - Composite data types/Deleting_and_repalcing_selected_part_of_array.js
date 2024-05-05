// Topic: 3.2.17 Deleting and replacing a selected part of the array
/* Concepts:
- The splice method modifies the original array by deleting or replacing elements.
- To delete elements, provide the starting index and the number of elements to delete as arguments to splice.
- Negative indices count from the end of the array.
- Splice returns an array containing the deleted elements.
- To insert elements, provide the starting index, the number of elements to delete (0 if not deleting), and the new elements.
- Splice inserts new elements into the array at the specified index.
*/

// Code:
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3); 
console.log(myPets); // Output: ["cat", "dog", "cat", "dog"]
console.log(removedPets); // Output: ["hamster", "canary", "shark"]

myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets); // Output: ["cat", "dog", "rabbit", "guinea pig", "cat", "dog"]

// Explanation: The example shows how to use splice to delete and replace elements in an array.