/*
Classes in JavaScript are templates for creating objects.
They simplify inheritance and are similar to classes in other languages like Java and Python.
Constructors are special functions inside classes used to initialize objects.
Objects created from a class are instances of that class.
Classes make object-oriented programming in JavaScript more intuitive.
Note: JavaScript's class syntax may differ from other languages in some aspects.
*/

// Class definition
class Animal {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display animal info
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating objects from the class
let dog = new Animal("Max", 5);
let cat = new Animal("Fluffy", 3);

// Accessing object properties and methods
dog.displayInfo(); // Output: Name: Max, Age: 5
cat.displayInfo(); // Output: Name: Fluffy, Age: 3

// Inheritance example
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

let germanShepherd = new Dog("Rex", 7, "German Shepherd");
germanShepherd.displayInfo(); // Output: Name: Rex, Age: 7
germanShepherd.bark(); // Output: Rex barks!
