/*Code Challenge #1
Scenario
Write a class called MyIterable that will allow you to create an iterable object with the following properties:

it will be possible to add arbitrary elements to it (add method)
an attempt to add an element that is already in the object will be ignored;
it will be possible to check whether an element is present in the object (has method)
it will be possible to delete an element (del method)
it will be possible to check the number of elements (length property)
it will be possible to use any technique for passing elements of an iterable object (spread operator, for ... of, iterators), and an appropriate generator should be used in the implementation. */

class MyIterable {
    constructor() {
        this.data = [];
    }

    get length() {
        return this.data.length;
    }

    has(n) {
        return this.data.includes(n);
    }

    add(n) {
        if (!this.has(n)) {
            this.data.push(n);
        }
    }

    del(n) {
        const index = this.data.indexOf(n);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }

    *[Symbol.iterator]() {
        for (let item of this.data) {
            yield item;
        }
    }
}

// Usage example:
const iterable = new MyIterable();
iterable.add(1);
iterable.add(2);
iterable.add(3);

console.log([...iterable]); // Output: [1, 2, 3]
console.log(iterable.length); // Output: 3
console.log(iterable.has(2)); // Output: true
iterable.del(2);
console.log([...iterable]); // Output: [1, 3]
console.log(iterable.length); // Output: 2
console.log(iterable.has(2)); // Output: false
