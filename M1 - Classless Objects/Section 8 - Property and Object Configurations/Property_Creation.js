/*
Property configuration allows us to modify the behavior and visibility of object properties.

Each property has configuration attributes: value, writable, enumerable, and configurable.

- value: Represents the value of the property.
- writable: Specifies if the property's value can be changed.
- enumerable: Determines if the property appears in Object.keys() or for...in loops.
- configurable: Controls if the property can be modified or deleted.

Default configuration attributes for properties created conventionally are all true.

Example using Object.keys() and Object.getOwnPropertyDescriptor():
*/

let contact = {
    _age: 18,
    firstName: "Kashish",
    lastName: "Raut",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    get age() { return this._age; },
    set age(a) { if (a > 0) this._age = a; }
};

let keys = Object.keys(contact);
console.log(keys); // Output: ["_age", "firstName", "lastName", "fullName", "age"]

let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc); // Output: { value: "Kashish", writable: true, enumerable: true, configurable: true }

/*
Using Object.defineProperty() to configure properties:
*/

let contact2 = {};
Object.defineProperty(contact2, "_age", {
    value: 18,
    writable: true,
    enumerable: false, // Not enumerable
    configurable: true
});

Object.keys(contact2); // Output: []
console.log(contact2._age); // Output: 36

Object.defineProperty(contact2, "_age", {
    value: contact2._age,
    writable: false, // Read-only
    enumerable: false,
    configurable: true
});

contact2._age = 100; // No effect due to read-only configuration
console.log(contact2._age); // Output: 36

/*
Using Object.getOwnPropertyNames() to retrieve all keys regardless of configuration:
*/

let enumKeys = Object.keys(contact2); // Output: []
let allKeys = Object.getOwnPropertyNames(contact2); // Output: ["_age"]
console.log(enumKeys);
console.log(allKeys);