// 1.10.5 Constructor

/*
The last approach is to use constructors. First, we define the Figure constructor, which creates a figure object.

Each time we call the Circle constructor (using new), it creates a new object with type, center, and radius fields. The prototype for each object will be a figure.

For the sake of variety, let’s define another constructor, Triangle, which will be used to create triangle objects. Its prototype will also be a figure.
*/

// Define the Figure constructor
let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

// Define the Circle constructor and set its prototype to figure
let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;

// Create circle objects using the Circle constructor
let circle1 = new Circle({x: 0, y: 0}, 10);
let circle2 = new Circle({x: 100, y: 100}, 100);

// Define the Triangle constructor and set its prototype to figure
let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [v1, v2, v3];
};
Triangle.prototype = figure;

// Create triangle objects using the Triangle constructor
let triangle1 = new Triangle({x: 0, y: 0}, {x: 50, y: 50}, {x: 10, y: 100});

// Test the getType method for circle and triangle objects
console.log(circle1.getType()); // Output: "circle"
console.log(triangle1.getType()); // Output: "triangle"

// Add a new method hi to the Circle prototype
Circle.prototype.hi = function(){console.log("Hi!")};

// Test the hi method for circle and triangle objects, as well as for the figure prototype
circle1.hi(); // Output: "Hi!"
triangle1.hi(); // Output: "Hi!"
figure.hi(); // Output: "Hi!"