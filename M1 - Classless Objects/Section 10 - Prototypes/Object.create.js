// 1.10.4 Object.create

/*
We can also create an empty object based on a selected prototype, later completing it with the necessary fields.

We use the Object.create method we already learned about.

Previously, we used it with a null argument, which meant that we created an empty object without a prototype.
*/

// Define the figure object with a getType method
let figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};

// Create an object based on the 'figure' prototype using Object.create
let circle = Object.create(figure);

// Add properties to the circle object
circle.type = "circle";
circle.center = {x: 0, y: 0};
circle.radius = 100;

// Call the getType method on circle to ensure that the association with the prototype works as expected
console.log(circle.getType()); // Output: "circle"