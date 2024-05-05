/*
Object configuration refers to the ability to change the behavior and structure of an entire object.

Methods for object configuration include:
- Object.preventExtensions(obj): Prevents adding new properties to the object.
- Object.seal(obj): Prevents adding, removing, or reconfiguring properties of the object.
- Object.freeze(obj): Similar to Object.seal but also makes properties read-only.

We can check the object's configuration using:
- Object.isExtensible(obj): Checks if new properties can be added to the object.
- Object.isSealed(obj): Checks if the object is sealed (properties cannot be added, removed, or reconfigured).
- Object.isFrozen(obj): Checks if the object is frozen (properties are read-only).

Example using object configuration methods:
*/

let user = {
    name: "Radheshyam",
    age: 47
};

// Prevent adding new properties
Object.preventExtensions(user);
user.email = "radheshyam@example.com"; // This will not add the 'email' property
console.log(user); // Output: { name: 'Radheshyam', age: 47 }

console.log(Object.isExtensible(user)); // Output: false

// Seal the object (prevent adding, removing, or reconfiguring properties)
Object.seal(user);
user.age = 48; // Allowed because the property is configurable
user.city = "Mumbai"; // This will not add the 'city' property
console.log(user); // Output: { name: 'Radheshyam', age: 48 }

console.log(Object.isSealed(user)); // Output: true

// Freeze the object (make properties read-only)
Object.freeze(user);
user.age = 49; // This change will not take effect
console.log(user); // Output: { name: 'Radheshyam', age: 48 }

console.log(Object.isFrozen(user)); // Output: true