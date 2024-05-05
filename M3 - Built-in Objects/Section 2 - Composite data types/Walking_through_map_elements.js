// Topic: 3.2.30 Walking through the map elements
/* Concepts:
- Maps offer methods like forEach, values, keys, and entries for iterating through their elements.
- forEach: Executes a provided function once for each key-value pair in the map.
- values: Returns an iterator with the values of the map.
- keys: Returns an iterator with the keys of the map.
- entries: Returns an iterator with the key-value pairs (entries) of the map.
*/

// Code:
let anotherPetsMap = new Map([["snakes", 1], ["cats", 3], ["dogs", 2]]);

// Using forEach to iterate through key-value pairs
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); // Output: snakes : 1 -> cats : 3 -> dogs : 2

// Using values to iterate through values
let petValuesIterator = anotherPetsMap.values();
console.log(petValuesIterator.next().value); // Output: 1
console.log(petValuesIterator.next().value); // Output: 3
console.log(petValuesIterator.next().value); // Output: 2

// Using keys to iterate through keys
let petKeysIterator = anotherPetsMap.keys();
console.log(petKeysIterator.next().value); // Output: snakes
console.log(petKeysIterator.next().value); // Output: cats
console.log(petKeysIterator.next().value); // Output: dogs

// Using entries to iterate through key-value pairs
let petsIterator = anotherPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // Output: ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]
    result = petsIterator.next();
}

// Explanation: We use forEach, values, keys, and entries methods to iterate through map elements and display key-value pairs.