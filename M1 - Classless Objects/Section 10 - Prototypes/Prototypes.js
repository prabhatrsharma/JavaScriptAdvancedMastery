// 1.10.1 Prototypes

/*
Objects are fundamental in many popular programming languages like Python, Java, C#, or C++.

Most languages adopt a class approach, where objects are created based on predefined classes containing methods and properties.

Classes act as templates for creating objects (instances). Operations like assigning values to properties or calling methods are performed on objects, not on classes.

Classes also facilitate inheritance, allowing us to create new classes based on existing ones with inherited properties and methods.

JavaScript initially didn't use classes. Instead, it relied on prototypes—a model where objects are connected to new objects through existing objects.

Prototypes became more prominent with the introduction of classes in ECMAScript 6, offering an alternative approach to object creation.

While the class approach is simpler, especially for beginners or those transitioning from other object-oriented languages, understanding prototypes is essential for JavaScript programming.

Note: Today, JavaScript primarily uses literal notation or classes for object creation. Literal notation is suitable for simple, ad hoc objects, while classes are preferred for more complex objects with inheritance.
*/

// Create objects using literal notation
let point = {x: 0, y: 0}; // Represents coordinates
let coloredPoint = {color: "red"}; // Represents color

// Link objects using __proto__
coloredPoint.__proto__ = point; // Establishes a prototype chain

// Access properties
console.log(Object.getOwnPropertyNames(coloredPoint)); // ["color"]
console.log(coloredPoint.color); // "red"
console.log(coloredPoint.x); // 0 (inherited from prototype)

// Modify inherited properties
coloredPoint.x = 100; // Creates a new property for coloredPoint
console.log(coloredPoint.x); // 100
console.log(point.x); // 0 (prototype unchanged)

// Change prototype properties
point.y = 200;
console.log(coloredPoint.y); // 200 (inherited from prototype)
console.log(point.y); // 200

// Note: Using __proto__ directly is discouraged in real code due to performance reasons. This is used here for learning purposes only.