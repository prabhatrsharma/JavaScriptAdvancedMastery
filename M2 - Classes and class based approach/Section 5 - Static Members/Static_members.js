// Topic: 2.5.1 Static members

/*
In JavaScript classes, we can define static methods and properties that are associated only with the class itself and not with instances of the class.
*/

// Code:
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
    static sayHello() {
        console.log("Hello!")
    };
};

let almostEmptyObject = new AlmostEmptyClass(120);
almostEmptyObject.sayHi(); // Output: Hi!
AlmostEmptyClass.sayHello(); // Output: Hello!

/*
In this example, we define a static method sayHello inside the AlmostEmptyClass.
We can call the static method directly on the class itself, but not on instances of the class.
*/

/*Additional Note:
Static methods are useful for defining utility methods that are related to the class but not specific to individual instances.
They allow us to perform operations that are not tied to any particular object of the class.*/