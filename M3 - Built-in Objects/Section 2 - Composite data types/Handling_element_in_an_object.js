// Topic: 3.2.35 Handling Elements in an Object

// We can add, modify, and delete elements in an object using dot notation, bracket notation, and the delete keyword.

// Let's consider an object representing pets and their quantities.
let anotherPetsObj = { "snakes": 1, "cats": 3, "dogs": 2 };

// Adding and modifying elements:
console.log(anotherPetsObj.snakes); // Output: 1
anotherPetsObj.snakes = 2; // Modifying the value for the "snakes" key
console.log(anotherPetsObj.snakes); // Output: 2

// Deleting an element:
delete anotherPetsObj.snakes; // Deleting the "snakes" key
console.log(anotherPetsObj.snakes); // Output: undefined

// Adding a new element:
anotherPetsObj.snakes = 0; // Adding a new key-value pair
console.log(anotherPetsObj.snakes); // Output: 0

// In JavaScript, we can access object properties using dot notation (e.g., obj.property) or bracket notation (e.g., obj['property']).
// We can use the delete keyword followed by the object property to delete that property from the object.
// Adding a new element is as simple as assigning a value to a new or existing property/key.

// This demonstrates basic operations for handling elements in an object.
