// Topic: 3.2.36 Walking Through Elements of an Object

// We can use various methods provided by the Object constructor to walk through the elements of an object.

// Let's consider an object representing pets and their quantities.
let anotherPetsObj = { "snakes": 1, "cats": 3, "dogs": 2 };

// Method 1: Using Object.keys to get an array of keys and then forEach to iterate over them.
Object.keys(anotherPetsObj).forEach(key => console.log(key)); // Output: snakes -> cats -> dogs

// Method 2: Using Object.values to get an array of values and then forEach to iterate over them.
Object.values(anotherPetsObj).forEach(value => console.log(value)); // Output: 1 -> 3 -> 2

// Method 3: Using Object.entries to get an array of key-value pairs and then forEach to iterate over them.
Object.entries(anotherPetsObj).forEach(entry => console.log(entry)); // Output: ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

// Method 4: Using a for...in loop to iterate over the keys of the object.
for (let key in anotherPetsObj) {
    console.log(key); // Output: snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // Output: 1 -> 3 -> 2
}

// In the for...in loop, key represents each key in the object, and anotherPetsObj[key] represents the corresponding value.
// These methods provide different ways to access and process the keys, values, and key-value pairs of an object.