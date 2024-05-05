/*
Another way to retrieve the names of all the object properties is to use the Object.keys method.
This method returns an array of property names, which we can use in any way we want.
Continuing with the previous example, the following call should return an array ["𝘁𝗲𝗹", "𝗲𝗺𝗮𝗶𝗹"] to the keys variable.
This array will contain all the keys (property names) of the contact object.
*/
let contact = {
    tel: "143-143-1432",
    email: "prabhatrsharma@gmail.com"
};
let keys = Object.keys(contact);
console.log(keys);