let contact = {
    tel: "143-143-1432"
};
/*
JavaScript allows for a more unambiguous test of whether an object field exists – using the keyword in.
If the field exists, it’s returned true (even if the field has no set value).
Otherwise, the value false is returned.
*/
if("notes" in contact) { // if true
    console.log(contact.notes);
}