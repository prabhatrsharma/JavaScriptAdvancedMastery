// Topic: 3.3.2 JSON

/* Concepts:
- JSON (JavaScript Object Notation) is a text-based data format used for data exchange.
- It is widely used for sending data over the network due to its simplicity and readability.
- JSON is supported natively in JavaScript through the built-in JSON object.
- JSON.stringify() method converts JavaScript objects or arrays into JSON format.
- JSON.parse() method converts JSON data back into JavaScript objects or arrays.

*/

// Code:

// Example 1: Converting a JavaScript object to JSON format
let vehicle1 = {
    id: "AK12113",
    longitude: 59.358615,
    latitude: 17.947589,
};
let vehicle1JSON = JSON.stringify(vehicle1);
console.log(typeof vehicle1JSON); // Output: string
console.log(vehicle1JSON); // Output: {"id":"AK12113","longitude":59.358615,"latitude":17.947589}

// Example 2: Converting a JavaScript array of objects to JSON format
let vehicles = [
    { id: "AK12113", longitude: 59.358615, latitude: 17.947589 },
    { id: "AL1024", longitude: 59.358615, latitude: 17.947589 },
    { id: "BA1001", longitude: 59.358615, latitude: 17.947589 },
];
let vehiclesJSON = JSON.stringify(vehicles);
console.log(typeof vehiclesJSON); // Output: string
console.log(vehiclesJSON); // Output: [{"id":"AK12113","longitude":59.358615,"latitude":17.947589},{"id":"AL1024","longitude":59.358615,"latitude":17.947589},{"id":"BA1001","longitude":59.358615,"latitude":17.947589}]