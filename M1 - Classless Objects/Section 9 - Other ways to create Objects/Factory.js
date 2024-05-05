// 1.9.2 Factory

/*
The factory pattern in JavaScript involves creating functions that return objects, allowing for flexible and easy object creation.

Example with a simple factory function to create points:
*/

let createPoint = function(x, y) {
    return {
        x,
        y
    };
};

let point1 = createPoint(1, 1);
let point2 = createPoint(2, 2);

console.log(point1.x); // Output: 1
console.log(point2.x); // Output: 2

/*
Improving the factory function by using arrow notation:
*/

createPoint = (x, y) => ({ x, y });

/*
Adding private properties and methods to objects using closure:
*/

let createColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;

    console.log(_info);

    return {
        x,
        y,
        getColor() {
            return _color;
        }
    };
};

let coloredPoint1 = createColoredPoint(1, 1, "red");
let coloredPoint2 = createColoredPoint(2, 2, "green");

console.log(coloredPoint1.getColor()); // Output: "red"
console.log(coloredPoint2.getColor()); // Output: "green"
console.log(coloredPoint1._color); // Output: undefined (private property)

/*
Explanation:
- The factory function createColoredPoint creates objects with private properties like _info and _color.
- The getColor method allows accessing the private _color property indirectly.
- Private properties are not accessible outside the object, demonstrating encapsulation.
*/