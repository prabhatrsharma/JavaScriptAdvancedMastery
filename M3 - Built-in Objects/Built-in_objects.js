// /* Built-in Objects in JavaScript */

// /* 
// - In JavaScript, we have ready-made objects known as built-in objects.
// - These objects provide functionalities like Math, JSON, etc.
// - They are classified into simple data types, composite data types, and utility objects.

// Simple Data Types:
// - Boolean: Represents true or false values.
// - Number: Represents numeric values.
// - String: Represents text values.
// - Date: Represents dates and times.

// Composite Data Types:
// - Array: Represents a collection of elements.
// - Set: Represents a collection of unique values.
// - Map: Represents a collection of key-value pairs.
// - Object: Represents generic objects.

// Utility Objects:
// - JSON: Provides methods for parsing and converting JSON data.
// - Math: Provides mathematical functions and constants.
// - RegExp: Represents regular expressions for pattern matching.

// Using Built-in Objects:
// - We can directly access methods and properties of built-in objects.
// - Example: Math.random() generates a random number.

// Static vs Prototype Methods:
// - Static methods belong to the constructor or class itself, not instances.
// - Prototype methods are available on instances of the constructor or class.

// Example with AlmostEmptyClass:
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    }

    sayHi() {
        console.log("Hi!");
    }

    static sayHello() {
        console.log("Hello!");
    }
}

let almostEmptyObject = new AlmostEmptyClass(120);
almostEmptyObject.sayHi(); // Output: Hi!
AlmostEmptyClass.sayHello(); // Output: Hello!

// Example with Number Constructor:
let n = new Number(100.123);
let fixed = n.toFixed(2); // Returns a string with two decimal places.
let test1 = Number.isInteger(100); // Checks if the number is an integer.
//let test2 = n.isInteger(100); // n.isInteger is not a function, as it's static.

// - We use prototype methods like toFixed() on instances and static methods like isInteger() directly on the constructor/class.
// - Understanding static and prototype methods is crucial for utilizing built-in objects effectively.
// */
