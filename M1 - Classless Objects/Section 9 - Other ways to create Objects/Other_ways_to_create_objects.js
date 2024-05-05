// 1.9.1 Other ways to create objects

/*
While the literal notation is the most common and straightforward way to create objects, JavaScript provides other techniques for object creation.

1. Using the Object.create() method:
This method creates a new object with the specified prototype object and optional properties.

Example:
*/

let personPrototype = {
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

let radheshyam = Object.create(personPrototype);
radheshyam.name = "Radheshyam";
console.log(radheshyam.greet()); // Output: "Hello, my name is Radheshyam"

/*
2. Using constructor functions:
Constructor functions are a traditional way to create objects in JavaScript. They are named with capital letters by convention.

Example:
*/

function Person(name) {
    this.name = name;
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

let kashish = new Person("Kashish");
console.log(kashish.greet()); // Output: "Hello, my name is Kashish"

/*
3. Using ES6 classes:
ES6 introduced the class syntax, which is syntactic sugar over constructor functions.

Example:
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

let animal = new Animal("Dog");
console.log(animal.speak()); // Output: "Dog makes a sound"

/*
4. Using factory functions:
Factory functions are functions that return objects, allowing for more flexible object creation.

Example:
*/

function createPerson(name) {
    return {
        name,
        greet() {
            return `Hello, my name is ${this.name}`;
        }
    };
}

let anotherName = createPerson("Laxmi");
console.log(anotherName.greet()); // Output: "Hello, my name is Laxmi"