/*
We use the keyword delete for this.
We use it to indicate the property that is to disappear from the object.
For example, a person from our contact resigns from work and his / her email is no longer valid.
So, we modify the object by removing an unnecessary field from it.
*/
// Example:
let contact = {
    tel: "143-143-1432",
    email: {
        work: "prabhatrsharma@gmail.com",
        private: "prabhatlsharma@gmail.com"
    }
};
delete contact.email.work;
console.log(contact.email.work); // -> undefined
console.log(contact.email.private); // -> prabhatlsharma@gmail.com