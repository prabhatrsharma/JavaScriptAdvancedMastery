// Topic: 3.2.34 Creating an Object

// Let's create an object using object literals.
// An object is a collection of key-value pairs, where keys are strings and values can be of any type.

let anotherPetsObj = { "snakes": 1, "cats": 3, "dogs": 2 };

// In this example, anotherPetsObj is an object with three properties: snakes, cats, and dogs.
// Each property is a key-value pair where the key is a string and the value can be any type of data.
// The values associated with the keys are numerical in this case, but they can be strings, arrays, functions, or other objects as well.

// We can access the values of the properties using dot notation or bracket notation.

console.log(anotherPetsObj.snakes); // Output: 1
console.log(anotherPetsObj["cats"]); // Output: 3

// We can also dynamically add, modify, or delete properties from the object.

// Adding a new property:
anotherPetsObj["hamsters"] = 5;

// Modifying an existing property:
anotherPetsObj.dogs = 4;

// Deleting a property:
delete anotherPetsObj.snakes;

// Now, let's display the modified object to see the changes.
console.log(anotherPetsObj);

// Looping through object properties:
// We can use a for...in loop to iterate over the properties of an object.
for (let key in anotherPetsObj) {
    console.log(`${key}: ${anotherPetsObj[key]}`);
}

// In the for...in loop, key represents the property name, and anotherPetsObj[key] represents the corresponding value.
// This allows us to dynamically access and process each property-value pair in the object.

// Conclusion:
// Objects in JavaScript are versatile data structures that store data as key-value pairs.
// They allow dynamic addition, modification, and deletion of properties, making them suitable for various data storage and manipulation tasks.
// Looping through object properties using a for...in loop provides a convenient way to process object data.