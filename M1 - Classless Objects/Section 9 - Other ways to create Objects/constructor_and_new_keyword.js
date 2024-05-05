// 1.9.3 The constructor and the new keyword

/*
In JavaScript, constructors are functions used with the new keyword to create objects.
They differ from regular functions in that they don't explicitly return an object; instead, they implicitly return the newly created object.

Example converting the factory function to a constructor function:
*/

let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;

    console.log(_info);

    this.x = x;
    this.y = y;
    this.getColor = function() {
        return _color;
    };
};

let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green");

console.log(coloredPoint1.getColor()); // Output: "red"
console.log(coloredPoint2.getColor()); // Output: "green"
console.log(coloredPoint1._color); // Output: undefined (private property)

/*
Explanation:
- Constructors are typically named with capital letters.
- The new keyword is used to create objects with a constructor.
- Inside the constructor, this refers to the newly created object.
- Constructors implicitly return the new object, so there's no explicit return statement.
*/