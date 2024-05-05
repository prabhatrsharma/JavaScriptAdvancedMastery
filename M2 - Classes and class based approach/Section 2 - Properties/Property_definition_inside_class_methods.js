// Topic: 2.2.2 Property definitions inside class methods

/*
In JavaScript classes, properties are often defined inside the bodies of constructors and methods.
While this isn't a true declaration, JavaScript automatically creates properties when values are assigned to them.
This approach can sometimes lead to code readability issues, especially when properties are defined across multiple methods.
*/

// Code:
class Vehicle {
    constructor({ id, latitude, longitude }) {
        // Implicit property declaration in the constructor
        this.id = id; // Unique identifier
        this.status = "unavailable"; // Default status
        this.setPosition({ latitude, longitude }); // Set initial position
    };

    // Method to set position
    setPosition({ latitude, longitude }) {
        this.time = Date.now(); // Record time of position update
        this.longitude = longitude; // Longitude coordinate
        this.latitude = latitude; // Latitude coordinate
    };

    // Method to get position
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};

// Creating a vehicle object
let vehicle = new Vehicle({ id: "AL1024", latitude: 59.367647, longitude: 18.213451 });

// Using methods and accessing properties
console.log(vehicle.status); // Output: "unavailable"
vehicle.setPosition({ latitude: 59.358615, longitude: 17.947589 });
console.log(vehicle.getPosition()); // Output: { latitude: 59.358615, longitude: 17.947589 }