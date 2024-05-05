/*Code Challenge #2
Scenario
Declare a User class that will allow you to create objects with user information (first name, last name, email).

The data should be passed to the constructor and stored as private properties.

Create setters and getters to handle them. Use regular expressions to check if the data passed to the constructor or setter is in the correct format (first and last name consist of letters only, first letter upper-case, proper email address format). For simplicity, assume that an email address can only consist of letters, while strings of letters can be separated by dots.

For example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk will be invalid.

If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.*/

// Regular expressions to check name and email formats
let nameRegExp = /^[A-Z][a-z]+$/;
let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

// User class definition
class User {
    // Private properties using # prefix
    #name;
    #surname;
    #email;

    // Constructor to initialize user object with name, surname, and email
    constructor(name, surname, email) {
        // Use setters to validate and set the values
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    // Getter for name
    get name() {
        return this.#name;
    }
    // Setter for name with validation using regular expression
    set name(val) {
        // Check if val is a string and matches the name format
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#name = val; // Set the name
        } else {
            // Throw an error if format is incorrect
            throw new Error(`Incorrect name format: ${val}`);
        }
    }

    // Similar getters and setters for surname and email
    get surname() {
        return this.#surname;
    }
    set surname(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#surname = val;
        } else {
            throw new Error(`Incorrect surname format: ${val}`);
        }
    }

    get email() {
        return this.#email;
    }
    set email(val) {
        if (typeof val === 'string' && val.match(emailRegExp)) {
            this.#email = val;
        } else {
            throw new Error(`Incorrect email format: ${val}`);
        }
    }
}

// Creating a new user object
try {
    let user1 = new User('Sharma', 'Sharma', 'prabhatrsharma@example.com');
    console.log(user1);
} catch (error) {
    console.error(error.message);
}

// Trying to create a user with invalid data
try {
    let user2 = new User('prabhat', 'sharma', 'invalid-email');
    console.log(user2);
} catch (error) {
    console.error(error.message);
}