// Topic: 2.1.2 Class Expression

/*
In JavaScript, classes are first-class citizens, meaning they can be treated like any other value. 
This includes storing classes in variables, passing them as arguments, and returning them from functions. 
A class expression is one way to define a class by assigning it to a variable, similar to function expressions.
*/

// Code:
let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // Output: 120
almostEmptyObject.sayHi(); // Output: Hi!
