/*
Properties of objects can be objects themselves, known as property nesting.
Methods placed in nested objects refer to the immediate object using 'this'.

Accessing properties of the parent object from a nested object's method is not possible with 'this'.
It aligns with the object-oriented programming concept of encapsulation.

For methods needing data from higher levels, pass them as arguments to the method.
*/

// Example demonstrating 'this' inside a nested object's method
let circle = {
    radius: 100,
    center: {
        x: 0,
        y: 0,
        show() {
            console.log(`${this.x}, ${this.y}`);
        }
    }
};

circle.center.show(); // Output: "0, 0"

// Attempting to access parent object properties from a nested object's method
let test = {
    point: circle.center
};

// Example demonstrating the limitation of accessing parent object properties from a nested object
console.log(test.point.x); // Output: 0 (from the nested object)
console.log(test.point.radius); // Output: undefined (cannot access parent object property)