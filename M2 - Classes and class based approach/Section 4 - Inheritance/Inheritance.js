// Topic: 2.4.1 Inheritance

/*
Inheritance in classes allows us to create new classes based on existing ones, inheriting their properties and methods.
In this example, we'll create a Bus class based on the Vehicle class to represent passenger vehicles with added features like the number of seats.
*/

// Code:
class Vehicle {
    constructor({ id, latitude, longitude }) {
        this.id = id;
        this.position = { latitude, longitude };
        this.status = "unavailable";
    };
    set position({ latitude, longitude }) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    get position() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};

// Extending Vehicle class to create Bus class
class Bus extends Vehicle {
    constructor({ seats, id, latitude, longitude }) {
        super({ id, latitude, longitude }); // Calling the constructor of the base class (Vehicle)
        this.seats = seats;
    }
}

// Creating a bus object
let bus = new Bus({ seats: 40, longitude: 18.213423, latitude: 59.367628, id: "AL1024" });

// Checking properties of the bus object
console.log(bus.seats); // Output: 40
console.log(bus.id); // Output: "AL1024"