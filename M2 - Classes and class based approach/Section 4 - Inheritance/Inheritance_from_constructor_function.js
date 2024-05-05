// Topic: 2.4.3 Inheritance from a constructor function

/*
In JavaScript, a new class can also extend a constructor function using the extends keyword.
*/

// Code:
let AlmostEmpty = function(sth) {
    console.log(sth);
    this.sayHi = function() {
        console.log("Hi!")
    };
};

class ExtendedClass extends AlmostEmpty {
    constructor(name) {
        super("I’m super ...");
        this.name = name;
    };
    sayHi() {
        console.log(`Hi ${this.name}!`);
    };
};

let obj = new ExtendedClass("Bob");
obj.sayHi();    // Output: Hi Bob!