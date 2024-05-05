// Topic: 3.4.1 Extending built-in types

// Creating a function to get an item at a specific index from an array
let getItem = function(array, index) {
    return array[index];
}

// Testing the getItem function
let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // Output: 80

// Creating a function to get a random item from an array
let getRandomItem = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Testing the getRandomItem function
console.log(getRandomItem(array)); // Output: ?
console.log(getRandomItem(array)); // Output: ?

// Extending the Array prototype to include a getRandomItem method
Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
}

// Testing the extended method on an array
console.log(array.getRandomItem()); // Output: ?
console.log(array.getRandomItem()); // Output: ?