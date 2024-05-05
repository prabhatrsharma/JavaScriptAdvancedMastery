// Topic: 3.2.18 The destructuring assignment
/* Concepts:
- Destructuring assignment in arrays allows for extracting values from arrays and assigning them to variables in a single line.
- It provides a concise way to extract array elements into variables.
- Destructuring assignment syntax uses square brackets on the left side of the assignment.
- Variables are declared inside square brackets and assigned values from corresponding positions in the array.
- Elements can be skipped by leaving an empty space in the square brackets.
- Default values can be provided to handle cases where array elements are not found at specified positions.
*/

// Code:
let myPets = ["cat", "dog", "hamster", "canary"];

// Destructuring assignment
let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // Output: cat
console.log(pet3); // Output: hamster

// Handling undefined values
let myOtherPets = ["cat", "dog"];
let [pet1New, , pet3New] = myOtherPets;
console.log(pet1New); // Output: cat
console.log(pet3New); // Output: undefined

// Using default values
let [pet1Default = "fish", , pet3Default = "fish"] = myOtherPets;
console.log(pet1Default); // Output: cat
console.log(pet3Default); // Output: fish

// Explanation: Destructuring assignment simplifies the process of extracting values from arrays and handling undefined elements.