/*Code Challenge #3
Scenario
Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

add – add a single user, arguments are name, surname and email;
delete - remove the user from the collection (the argument is the email)
get - retrieve a single user from the collection (the argument is the email)
getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email.*/

// Define the User class
class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}

// Define the Users class
class Users {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(name, surname, email) {
        try {
            this.#users.set(email, new User(name, surname, email));
        } catch (e) {
            console.log(e.message);
        }
    }

    delete(email) {
        return this.#users.delete(email);
    }

    get(email) {
        return this.#users.get(email);
    }

    getAll(sortBy) {
        // Validate sortBy argument to ensure it's one of the valid fields
        if (!['name', 'surname', 'email'].includes(sortBy)) {
            throw new Error('Invalid sort field. Must be "name", "surname", or "email".');
        }

        // Sort and return the users array based on the specified field
        return [...this.#users].sort((u1, u2) => {
            if (sortBy === 'name' || sortBy === 'surname') {
                return u1[1][sortBy].localeCompare(u2[1][sortBy]);
            } else {
                return u1[1][sortBy] > u2[1][sortBy] ? 1 : -1;
            }
        }).map(u => u[1]);
    }
}

// Create an instance of the Users class
let users = new Users();

// Add some users to the collection
users.add("Prabhat", "Sharma", "prabhatrsharma@example.com");
users.add("Devanand", "Sahrma", "omdevadeva@example.com");
users.add("Kashish", "Raut", "kashish.raut@example.com");

// Get a single user by email
console.log(users.get("prabhatrsharma@example.com"));

// Delete a user by email
console.log(users.delete("omdevadeva@example.com"));

// Get all users sorted by name
console.log(users.getAll("name"));

// Get all users sorted by surname
console.log(users.getAll("surname"));

// Get all users sorted by email
console.log(users.getAll("email"));