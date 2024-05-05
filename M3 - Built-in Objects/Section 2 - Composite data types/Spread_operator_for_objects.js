// Topic: Spread Operator for Objects

// The spread operator for objects is used to copy the properties of one object into another object.

// Let's consider an object representing pets and their quantities.
let petsObj = { "cats": 1, "dogs": 3, "hamsters": 2 };

// We can use the spread operator to create a new object by copying the properties of petsObj and adding a new property.
let newPetsObj = { ...petsObj, "sharks": 1 };
console.log(newPetsObj); // Output: { cats: 1, dogs: 3, hamsters: 2, sharks: 1 }

// The spread operator helps in creating new objects with combined properties from existing objects.

// This demonstrates how the spread operator can be used for objects to create new objects with extended properties.