//Example:
let contact = {
    tel: "143-143-1432",
    email: "prabhatrsharma@gmail.com"
};

/* We’ll add the new fields firstName and lastName to the existing object, and display the values of the selected properties. */
contact.firstName = "Prabhat";
contact.lastName = "Sharma";
console.log(contact.tel);   // -> 143-143-1432
console.log(contact.firstName);     // -> Prabhat

/* By the way, try to display a non-existent property, such as a notes. Note that a non-existent property of an object is treated as undefined and not, for example, as null. */
console.log(contact.notes); // -> undefined