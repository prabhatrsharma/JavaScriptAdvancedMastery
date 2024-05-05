// Topic: 2.3.1 Getters and Setters

/*
Getters and setters are special methods in classes that allow us to get and set values of object properties in a controlled way.
In this example, we'll modify the Vehicle class to use getters and setters instead of regular methods to manipulate the position property.
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

// Creating a vehicle object
let vehicle = new Vehicle({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });

// Using setter to change position
vehicle.position = { longitude: 18.193121, latitude: 59.378654 };

// Using getter to get position
console.log(vehicle.position); // Output: { latitude: 59.378654, longitude: 18.193121 }
