// 4.2.2 Iterators

/*
An iterator is a specific object associated with an iterable object. It can be treated as a pointer to an element of the iterable object.
The iterator, when created, initially does not point to any element. Only using the next method, which the iterator provides, sets it on the first of the elements.
Each subsequent call of the next method moves it to the next element.
The next method, apart from moving the iterator to the next element, returns an object that consists of two fields:
- value, which contains the element of the iterable object that the iterator points to after calling next
- done, which is set to false by default and changes its value to true when calling next, causing the iterator to move beyond the last element of the collection

Such behavior of iterators is compliant with the Iterator protocol.
Objects implementing the Iterator protocol (by having the appropriate next method) are iterators.
*/

// Let's create our own iterable object from scratch.
let almostIterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                }
            }
        }
    }
}

let it = almostIterable[Symbol.iterator]();
console.log(it.next()); // Output: {value: 10, done: false}
console.log(it.next()); // Output: {value: 30, done: false}

// Test for ... of loop and spread operator
for (let a of almostIterable) { // No error, iterates through elements
    console.log(a); 
}
console.log(...almostIterable); // Spread operator works as well
console.log([...almostIterable]); // Array spread also works

// We have successfully created our own iterable object with iterators.
// However, the iterator code may not look the prettiest. Generators can help improve this.