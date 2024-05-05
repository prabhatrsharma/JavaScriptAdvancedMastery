// 1.10.2 __proto__

/*
Let's start with the unrecommended __proto__ way.

Let’s create a figure object that has one getType method. The method will check if we have a type field in the object, returning either its value or the string "unknown".

The second object, circle, contains the properties type, center, and radius. Both objects are created using the literal technique. Using __proto__, we assign figure as the prototype of circle.
*/

let figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};

let circle = {
    type: "circle",
    center: {x: 0, y: 0},
    radius: 100
};
circle.__proto__ = figure;

// Let's call the getType method for both objects

console.log(figure.getType()); // "unknown"
console.log(circle.getType()); // "circle"

/*
If you call figure.getType, it will return "unknown"; after all, the object has no type field. Calling circle.getType will display "circle", a string stored in the type field of the circle object.

In this case, JavaScript doesn’t find the getType method directly in circle, so it starts searching the prototype chain.

After finding the method in the prototype, it calls it. Only one thing may need to be explained.
*/

/*
Look at the getType method declaration. Inside it, we refer to the type field using the word this.

We explained earlier that this refers to the object in which we define the method. That was a bit of a simplification, but usually true. In fact, this refers to the object in the context of which a given function is called. In our case, the method belongs to figure, but it is called in circle.

In such a situation, this inside it refers to circle and not to figure.
*/