/*
Getters and setters are special methods used to get and set the values of object properties.
They are declared using the 'get' and 'set' keywords respectively.

Key features of getters and setters:
- Setters take exactly one argument, while getters do not accept any arguments.
- They are accessed like ordinary properties but internally invoke the corresponding methods.
- A pair of getter and setter with the same name is treated as a property with read and write capabilities.

Getters and setters are useful for encapsulating complex property access and modification logic within an object.

Example with a getter method:
*/

let contact = {
    _tel: "022-551-7316",
    get tel() { return this._tel; }
};

console.log(contact.tel); // Output: "022-551-7316"
contact.tel = "100-100-1000"; // Setter does not exist, so assignment is ignored
console.log(contact.tel); // Output: "022-551-7316"
contact.email = "prabhatrsharma@freepost.org"; // Creates a new property 'email'
console.log(contact.email); // Output: "prabhatrsharma@freepost.org"

// Example with a getter and setter method:
let contact2 = {
    _tel: "207-662-5412",
    get tel() { return this._tel; },
    set tel(t) { this._tel = t; }
};

console.log(contact2.tel); // Output: "207-662-5412"
contact2.tel = "100-100-1000"; // Sets the value using the setter method
console.log(contact2.tel); // Output: "100-100-1000"

// Complex example with getters and setters:
let contact3 = {
    _age: 18,
    firstName: "Kashish",
    lastName: "Raut",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    get age() { return this._age; },
    set age(a) { if (a > 0) this._age = a; }
};

console.log(contact3.fullName); // Output: "Kashish Raut"
contact3.age = -20; // Setter validates the age and does not update if invalid
console.log(contact3.age); // Output: 18