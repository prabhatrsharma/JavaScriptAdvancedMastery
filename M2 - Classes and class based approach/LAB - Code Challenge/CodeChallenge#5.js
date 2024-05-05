/*Code Challenge #5
Scenario
Create an ExtendedTutoring class, inheriting from Tutoring.

Equip it with one new method: sendMessages(from, to, message). The from argument is the user (student or teacher) who sends the message. The argument to is the list of recipients (user objects).*/

// Define the ExtendedUser class
class ExtendedUser {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    addCourse(course, level) {
        this.courses.push({ course, level });
    }

    // Other methods specific to ExtendedUser class
    sendMessage(from, message) {
        this.messages.push({ from: from.email, to: this.email, content: message });
        console.log(`Message sent from ${from.email} to ${this.email}: ${message}`);
    }
}

// Define the Tutoring class
class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    // Other methods and properties here
}

// Define the Student class extending ExtendedUser
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'student' });
    }

    // Other methods and properties specific to Student class
}

// Define the Teacher class extending ExtendedUser
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'teacher' });
    }

    // Other methods and properties specific to Teacher class
}

// Define the ExtendedTutoring class inheriting from Tutoring
class ExtendedTutoring extends Tutoring {
    constructor() {
        super();
    }

    sendMessages(from, to = [], message) {
        if (from && to.length) {
            for (let target of to) {
                target.sendMessage(from, message);
            }
        }
    }
}

// Usage example
const tutoring = new ExtendedTutoring();

// Create students and teachers
const student1 = new Student({ name: 'Prabhat', surname: 'Sharma', email: 'prabhatrsharma@example.com' });
const student2 = new Student({ name: 'Kashish', surname: 'Raut', email: 'kashish.raut@example.com' });
const teacher1 = new Teacher({ name: 'Radheshyam', surname: 'Sharma', email: 'radheshyam@example.com' });
const teacher2 = new Teacher({ name: 'Laxmi', surname: 'Devi', email: 'laxmirsharma@example.com' });

// Add students and teachers to tutoring system
tutoring.addStudent(student1);
tutoring.addStudent(student2);
tutoring.addTeacher(teacher1);
tutoring.addTeacher(teacher2);

// Send messages
tutoring.sendMessages(student1, [teacher1, teacher2], 'Hello, I need help with the math assignment.');
tutoring.sendMessages(teacher1, [student1, student2], 'Sure, I can help with that.');

// Display students and teachers for demonstration
console.log('Students:', tutoring.students);
console.log('Teachers:', tutoring.teachers);