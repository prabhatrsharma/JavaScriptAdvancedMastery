// 4.2.3 Generators

// Generator Function
// Special function that can interrupt and resume its execution.

// Yield Operator
// Interrupts the generator function and returns a given value.

// Syntax
function* testGenerator1() {
    yield 10;
    yield 20;
    yield 30;
}
let gen1 = testGenerator1();
console.log(gen1.next()); // {value: 10, done: false}
console.log(gen1.next()); // {value: 20, done: false}
console.log(gen1.next()); // {value: 30, done: false}
console.log(gen1.next()); // {value: undefined, done: true}

// Using Generators in Loops
function* testGenerator2() {
    for (let i = 10; i <= 30; i += 10) {
        yield i;
    }
}
let gen2 = testGenerator2();
console.log(gen2.next()); // {value: 10, done: false}
console.log(gen2.next()); // {value: 20, done: false}
console.log(gen2.next()); // {value: 30, done: false}
console.log(gen2.next()); // {value: undefined, done: true}

// Generating Values from Arrays
function* testGenerator3() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}
let gen3 = testGenerator3();
console.log(gen3.next()); // {value: 10, done: false}
console.log(gen3.next()); // {value: 20, done: false}
console.log(gen3.next()); // {value: 30, done: false}
console.log(gen3.next()); // {value: undefined, done: true}

// Using Generators with Iterable Objects
let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for (let element of this.data) {
            yield element;
        }
    }
}
let it1 = iterable[Symbol.iterator]();
console.log(it1.next()); // {value: 10, done: false}
console.log(it1.next()); // {value: 30, done: false}
for (let a of iterable) {
    console.log(a); // 10 30 60 20 90
}
console.log(...iterable); // 10 30 60 20 90
console.log([...iterable]); // [10 30 60 20 90]

// Generator for Factorial
let factorialGenerator = function* (range = Infinity) {
    let last = 1;
    for (let index = 1; index <= range; index++) {
        last *= index;
        yield last;
    }
}
let factorial = factorialGenerator(3);
console.log(factorial.next()); // {value: 1, done: false}
console.log(factorial.next()); // {value: 2, done: false}
console.log(factorial.next()); // {value: 6, done: false}
console.log(factorial.next()); // {value: undefined, done: true}

// Generator for Fibonacci Sequence
function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for (let i = 1; i <= range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}
let fibIt1 = fibonacci(10);
console.log([...fibIt1]);
let fibIt2 = fibonacci();
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
let fibIt3 = fibonacci(5);
for (let f of fibIt3) {
    console.log(f);
}

// Delegating Generators
function* cities() {
    for (let city of ['London', 'Oslo', 'Berlin']) {
        yield city;
    }
}
function* test() {
    yield* cities();
    yield 'Amsterdam';
    yield* ['Madrid', 'Rome'];
}
console.log([...test()]); // ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']