// Topic: 2.1.3 The instanceof operator

/*
In JavaScript, the "instanceof" operator is used to check if an object is an instance of a specific class. 
This helps us determine the type of object, especially in complex codebases where multiple classes and objects are involved. 
Additionally, the "constructor.name" property of an object can also be used to retrieve the name of the class from which the object was created.
*/

// Code:
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120);

// Using instanceof to check if an object is an instance of a class
console.log(almostEmptyObject instanceof AlmostEmptyClass); // Output: true
console.log(almostEmptyObject instanceof String); // Output: false

// Using constructor.name to get the name of the class from which an object was created
console.log(almostEmptyObject.constructor.name); // Output: "AlmostEmptyClass"

// Demonstrating instanceof with generic Object class
console.log(almostEmptyObject instanceof Object); // Output: true
