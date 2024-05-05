// Topic: 3.2.24 Walking through the set elements
/* Concepts:
- The forEach method in Set objects allows iterating over each element in the Set.
- It works similarly to the Array forEach method, taking a callback function that operates on each element.
- The keys and values methods in Set objects are equivalent; they both allow iterating over the Set elements.
- Iterators are objects that store information about visited collection elements and provide the next method to move to the next element.
*/

// Code:
let petsSet = new Set(["cat", "dog", "hamster"]); // Output: {"cat", "dog", "hamster"}

// Using forEach to iterate over each element
petsSet.forEach(value => console.log(value)); // Output: cat -> dog -> hamster

// Using values method to create an iterator and iterating using the next method
let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // Output: cat
console.log(petsIterator.next().value); // Output: dog
console.log(petsIterator.next().value); // Output: hamster

// Using a while loop with iterator to iterate over each element
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // Output: cat -> dog -> hamster
    result = petsIterator.next();
}

// Explanation: Set objects provide forEach, values, and keys methods to iterate over elements using callbacks or iterators.