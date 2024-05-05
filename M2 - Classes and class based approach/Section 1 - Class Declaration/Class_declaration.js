// Topic: 2.1.1 Class Declaration

/*
Classes in JavaScript are templates for creating objects. They simplify the process of creating multiple objects with similar properties and behaviors. 
In this example, we'll create a class for vehicles with properties like id, status, and position, along with methods to set and get position information.
*/

// Code:
class Vehicle {
    constructor({id, latitude, longitude}){
        // Initialize vehicle properties
        this.id = id; // Unique identifier
        this.status = "unavailable"; // Current status of the vehicle
        this.setPosition({latitude, longitude}); // Set initial position
    };

    // Method to set position
    setPosition({latitude, longitude}) {
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

// Creating a vehicle object and using methods
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition());