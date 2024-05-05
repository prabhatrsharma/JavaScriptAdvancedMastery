/*
Using for ... in, we can go through the properties of an object.
More precisely – we go through the names of the properties, (i.e. the keys).
Let's display the property names of the contact object.
*/
let contact = {
    tel: "143-143-1432",
    email: "prabhatrsharma@gmail.com"
};
for(x in contact) {
    // print property name
    console.log(x);
}
/*
The names of all the properties (keys) of the contact object are assigned to the variable x in turn.
To get to the value of a given field, we use bracket notation (the key is dynamically calculated and placed in the variable, so we cannot use dot notation).
*/
for(x in contact) {
    // print property value 
    console.log(contact[x]);
}
/* Finally, if we would like to display the name, type, and value of all the properties, we could write it as follows: */
for(x in contact) {
    // print property name, type and value
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}