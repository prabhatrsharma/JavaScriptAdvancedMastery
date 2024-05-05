/*
How do they differ from ordinary arrays? We don’t refer to the individual elements of an object by means of indexes, which define their position in the collection, but by means of keys (i.e. we "associate" an element with a key).

A key is simply a label (a name), which is unique within an object and unambiguously defines the selected element.

In objects, we call their component elements properties. Each property will consist of a key (or label) and a value.

The idea of objects comes from observing the surrounding reality. Practically everything in our environment, whether material (e.g. a car) or abstract (e.g. a contact in an address book) is a collection of certain components.

We can name these elements, or properties, and assign them specific values. Properties define a given object.
*/
let sampleObject = {
    id: 10,
    name: "en to tre",
    isPresent: true,
    delay: 50
};
sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);    // -> 10
console.log(sampleObject.name);    // -> en to tre
console.log(sampleObject.delay);    // -> 100