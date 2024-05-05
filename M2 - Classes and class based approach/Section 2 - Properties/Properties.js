// Topic: 2.2.1 Properties

/*
In JavaScript, objects contain both methods and properties. 
Classes must be able to define properties, and there are two methods to do so: 
- Inside the body of the constructor and methods 
- In the body of the class (a more recent and experimental technique)
Both types of declaration can be used together in one class.
*/

// Code:
class Vehicle {
    constructor({ id, latitude, longitude, status }) {
        // Properties declared in the constructor
        this.id = id; // Unique identifier
        this.latitude = latitude; // Latitude coordinate
        this.longitude = longitude; // Longitude coordinate
        this.status = status || "unavailable"; // Current status, defaulting to "unavailable"
    };

    // Method to update status
    updateStatus(newStatus) {
        this.status = newStatus;
    };

    // New experimental method to declare a property inside the class body
    #manufacturer = "Unknown"; // Private property for manufacturer

    // Method to get manufacturer
    getManufacturer() {
        return this.#manufacturer;
    };

    // Method to set manufacturer (experimental)
    setManufacturer(newManufacturer) {
        this.#manufacturer = newManufacturer;
    };
};

// Creating a vehicle object
let vehicle = new Vehicle({
    id: "AL1024",
    latitude: 59.367647,
    longitude: 18.213451,
    status: "available"
});

// Using methods and properties
console.log(vehicle.status); // Output: "available"
vehicle.updateStatus("busy");
console.log(vehicle.status); // Output: "busy"

console.log(vehicle.getManufacturer()); // Output: "Unknown"
vehicle.setManufacturer("Toyota");
console.log(vehicle.getManufacturer()); // Output: "Toyota"