// 1.10.3 Object.setPrototypeOf

/*
What alternatives do we have if using __proto__ is not recommended?

First, we can use the Object.setPrototypeOf and Object.getPrototypeOf methods.

The first one allows us to associate the target object with the prototype object.

The second one returns the prototype of the indicated object (in our example, the proto variable should refer to the figure object).
*/

// Create the figure object with the getType method
let figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};

// Create the circle object with properties
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};

// Associate circle with figure as its prototype using Object.setPrototypeOf
Object.setPrototypeOf(circle, figure);

// Retrieve the prototype of circle using Object.getPrototypeOf and store it in the proto variable
let proto = Object.getPrototypeOf(circle);

// Call the getType method on circle to ensure that the association with the prototype works as expected
console.log(circle.getType()); // Output: "circle"