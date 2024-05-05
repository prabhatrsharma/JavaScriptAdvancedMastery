// Topic: 2.4.2 Shadowing

/*
When extending a class and defining a method with the same name as a method in the base class, the new method shadows the old one.
The super keyword allows us to call the shadowed base class method.
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

class ExtendedClass extends AlmostEmptyClass {
    constructor(name) {
        super("I’m super ...");
        this.name = name;
    };
    sayHi() {
        console.log(`Hi ${this.name}!`);
    };
    newHi() {
        this.sayHi();
    }
    oldHi() {
        super.sayHi();
    };
};

let obj = new ExtendedClass("Prabhat"); // Output: I’m super ...
obj.sayHi();    // Output: Hi Prabhat!
obj.newHi();    // Output: Hi Prabhat!
obj.oldHi();    // Output: Hi!
