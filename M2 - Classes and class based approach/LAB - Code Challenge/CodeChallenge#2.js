/*Code Challenge #2
Scenario
Create a new class, ExtendedUser, that will inherit from the User class.

Put a setter and getter named fullName in it. The getter should return the first name and last name concatenated into one string. The setter takes the concatenated first and last name *e.g. 'Rafael Fifer') and splits it into first and last name (the split method), changing the appropriate properties of the object.

Based on the ExtendedUser class, create two more classes, Teacher and Student (inheritance). They should not have any new methods or properties, but only the default roles in their constructors to 'teacher' or 'student' respectively (i.e. their constructors will take three parameters instead of four: name, surname, and email);*/

// Define the User class first
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    addCourse(course, level) {
        // Implementation here
    }

    removeCourse(course) {
        // Implementation here
    }

    editCourse(course, level) {
        // Implementation here
    }

    sendMessage(from, message) {
        // Implementation here
    }

    showMessagesHistory() {
        // Implementation here
    }
}

// Define the ExtendedUser class inheriting from User
class ExtendedUser extends User {
    constructor({ name, surname, email, role }) {
        super({ name, surname, email, role });
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {
        let names = fullName.split(' ');
        if (names.length >= 2) {
            this.name = names[0];
            this.surname = names.slice(1).join(' '); // Handle multi-part surnames
        } else {
            console.log('Full name should contain both first name and last name.');
        }
    }
}

// Define the Teacher class inheriting from ExtendedUser
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'teacher' });
    }
}

// Define the Student class inheriting from ExtendedUser
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'student' });
    }
}

// Example usage:
const teacher = new Teacher({ name: 'Kashish', surname: 'Raut', email: 'kashish.raut@example.com' });
const student = new Student({ name: 'Prabhat', surname: 'Sharma', email: 'prabhatrsharma@example.com' });

teacher.fullName = 'Kashish Raut';
console.log(teacher.fullName); // Output: Kashish Raut

student.fullName = 'Prabhat Sharma';
console.log(student.fullName); // Output: Prabhat Sharma