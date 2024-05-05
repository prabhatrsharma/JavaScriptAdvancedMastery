/* we can assign a new value of any type to an existing object property at any time – we are not limited by the previous value type.
let contact = {
    tel: "143-143-1432",
    email: "prabhatrsharma@gmail.com"
};
*/

/* After creating a contact, it turns out that the person placed in it has two email addresses.
At this point, it would be easiest to place an array of addresses in the email field, overwriting the old value.
contact.email = ["prabhatrsharma@gmail.com", "prabhatlsharma@gmail.com" ];
*/

/* However, if we know that one of these addresses is private and the other is business, it would be more logical to save them as an object – this will later allow us to easily distinguish the addresses by their "type".
Let’s overwrite the email field again.
contact.email = {
    work: "prabhatrsharma@gmail.com",
    private: "prabhatlsharma@gmail.com" 
};
console.log(contact.email.work);
*/

// Corrected Combined Code:
let contact = {
    tel: "143-143-1432",
    email: {
        work: "prabhatrsharma@gmail.com",
        private: "prabhatlsharma@gmail.com"
    }
};

console.log(contact.email.work);