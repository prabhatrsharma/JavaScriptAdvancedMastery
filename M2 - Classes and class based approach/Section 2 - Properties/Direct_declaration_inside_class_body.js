// Topic: 2.2.3 Direct declaration inside the class body

/*
In JavaScript, properties can now be explicitly declared in the body of a class, similar to method declarations.
This feature includes the ability to define both public and private properties.
*/

// Code:
class Vehicle {
    status = "unavailable"; // Public property
    #longitude; // Private property
    #latitude; // Private property

    constructor({ id, latitude, longitude }) {
        this.id = id;
        this.setPosition({ latitude, longitude });
    };

    setPosition({ latitude, longitude }) {
        this.time = Date.now();
        this.#longitude = longitude; // Setting private property
        this.#latitude = latitude; // Setting private property
    };

    getPosition() {
        return {
            latitude: this.#latitude, // Accessing private property
            longitude: this.#longitude // Accessing private property
        };
    };
};

// Creating a vehicle object
let vehicle = new Vehicle({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });

// Accessing public property
console.log(vehicle.status); // Output: "unavailable"

// Accessing private property (will throw an error)
// console.log(vehicle.#longitude);

// Using methods to access private property
vehicle.setPosition({ latitude: 59.358615, longitude: 17.947589 });
console.log(vehicle.getPosition()); // Output: { latitude: 59.358615, longitude: 17.947589 }