/*
Methods often need to access object fields to modify properties or retrieve information.
The 'this' keyword refers to the object the method belongs to, allowing access to its properties.

Using 'this' ensures the method operates on the correct object even if copied.

Avoid directly referring to object names inside methods, as it can lead to unexpected behavior.

Correct use of 'this' inside methods ensures proper functionality across objects and copies.
*/

// Example demonstrating the use of 'this' in an object method
let circle = {
    radius: 100,
    center: {
        x: 0,
        y: 0
    },
    // Method using 'this' to refer to object properties
    getType() {
        return typeof this.radius === "number" ? "circle" : "unknown";
    }
};

console.log(circle.getType()); // Output: "circle"

// Creating a copy of the circle object
let figure = { ...circle };
delete circle.radius;

console.log(figure.radius); // Output: undefined
console.log(figure.getType()); // Output: "circle"

/*
Using 'this' ensures the method getType operates on the 'figure' object's properties, even after modifying the 'circle' object.
*/

// Avoid using arrow functions for object methods as they don't bind 'this' to the object
