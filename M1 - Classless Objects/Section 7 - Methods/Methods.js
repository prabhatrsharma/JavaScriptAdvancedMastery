/*
Objects in JavaScript can have functions called methods.
Methods enhance object functionality.
*/

// Creating a circle object with a method
let circle = {
    radius: 100,
    // Method using ES6 method shorthand
    getType() {
        return "circle";
    }
};

// Calling the method using dot notation
console.log(circle.getType()); // Output: "circle"