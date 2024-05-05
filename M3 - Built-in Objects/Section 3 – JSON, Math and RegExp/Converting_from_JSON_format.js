// Topic: 3.3.3 Converting from JSON format

/* Concepts:
- JSON.parse() method is used to convert JSON text format into JavaScript objects or arrays.
- The JSON text must be valid, following the JSON syntax rules.
- The object keys in JSON must be enclosed in double quotes.
- JSON.parse() can handle complex JSON data containing objects and arrays.
*/

// Code:

// Example 1: Converting JSON string to JavaScript object
let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // Output: object
console.log(vehicle.position.longitude); // Output: 59.358615

// Example 2: Converting JSON string containing an array to JavaScript array
let vehiclesJSON = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';
vehiclesJSON = vehiclesJSON.replaceAll("id", "plate"); // Replace 'id' with 'plate' for fun
let vehicles = JSON.parse(vehiclesJSON);
console.log(vehicles instanceof Array); // Output: true
console.log(vehicles.length); // Output: 3
console.log(vehicles[0].plate); // Output: AK12113