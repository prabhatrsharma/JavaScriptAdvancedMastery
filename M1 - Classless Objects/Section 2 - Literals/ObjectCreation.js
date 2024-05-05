/*
Basic way to create objects:
The simplest and most common is the use of 𝗹𝗶𝘁𝗲𝗿𝗮𝗹 𝗻𝗼𝘁𝗮𝘁𝗶𝗼𝗻 – that is, the declaration presented earlier using curly brackets (another name for this is initializer notation).
*/
// Example: We create an empty object (without properties) and place it in the contact variable.
let contact = {};

/*
We can modify an object created in this way by, among other things, adding new properties.

In our example, we add a property with the tel key. Note that the property is indicated by writing its name after the object name, where the names are separated by a dot. This is called dot notation.
*/
// Example:
contact.tel = "143-143-1432";
console.log(contact);
console.log(contact.tel);

/*
Nothing stands in the way of declaring and initiating properties immediately when creating an object. This time the object will have two properties: phone and email. In the literal notation, the following properties are separated from each other by commas. A colon is used to separate a property name (a key) from a value.
*/
// Example:
let contact = {
    tel: "143-143-1432",
    email: "prabhatrsharma@gmail.com"
};
console.log(contact);
console.log(contact.tel);

/*
The key is a string. When creating an object, the key can be enclosed in quotation marks, although this is not necessary (JavaScript automatically interprets it as a string). However, this can be useful when you want to create a key consisting of several words. For example, the following construction will be ⁡⁢⁣⁢wrong⁡:

let contact = {
    first name: "Prabhat"
};

and we need to change it to:

let contact = {
    "first name": "Prabhat"
};
⁡⁢⁢⁢‍‍‍However, giving keys names consisting of many separate words is not the best idea.
‍If you need a multi-word name, it’s better to use, for example, the Camel case notation, and write 𝗳𝗶𝗿𝘀𝘁𝗡𝗮𝗺𝗲 instead of "first name". The notation will be both more readable to the user and less burdensome on the computer. With multi-word keys, it will also be a problem to refer to the property of an existing object – dot notation does not allow it.⁡

By the way, have you noticed that the console.log used in this chapter is also an example of "dot notation"? It would appear that the console is an object and the log is its property. And so it is.

console.log(typeof console);    // -> object
console.log(typeof console.log);    // -> function​
*/
