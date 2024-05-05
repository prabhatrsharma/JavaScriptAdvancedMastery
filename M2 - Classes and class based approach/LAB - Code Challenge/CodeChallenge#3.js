/*Code Challenge #3
Scenario
Modify the ExtendedUser class (rewrite it) by adding a static match method to it. The method should retrieve the teacher object, student object, and optionally a course name. Its task is to find the match between the student and the teacher.

In case the course name is not provided, the method should return:

an empty array if there is no match (the teacher does not teach courses the student is interested in, or teaches courses at a lower level)
an array with {course, level} objects, if the teacher teaches the courses the student is interested in.
If the course name is passed as the last argument, then the method should return the {course, level} object in case of a correct match, or undefined otherwise.*/

// Define the User class
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    // Other methods and properties of the User class
}

// Define the ExtendedUser class that extends User
class ExtendedUser extends User {
    constructor({ name, surname, email, role }) {
        super({ name, surname, email, role });
    }

    // Getter and setter for fullName
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {
        const names = fullName.split(' ');
        if (names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }

    // Static match method
    static match(teacher, student, course) {
        let matched = [];
        for (let scourse of student.courses) {
            for (let tcourse of teacher.courses) {
                if (scourse.course === tcourse.course && scourse.level <= tcourse.level) {
                    matched.push(scourse);
                }
            }
        }
        if (course) {
            for (let mcourse of matched) {
                if (mcourse.course === course) {
                    return mcourse;
                }
            }
            return undefined; // Return undefined instead of null for consistency
        } else {
            return matched;
        }
    }
}

// Define the Teacher class that extends ExtendedUser
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'teacher' });
    }

    // Add the addCourse method for Teacher
    addCourse(course, level) {
        this.courses.push({ course, level });
    }
}

// Define the Student class that extends ExtendedUser
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'student' });
    }

    // Add the addCourse method for Student
    addCourse(course, level) {
        this.courses.push({ course, level });
    }
}

// Example usage:
const teacher = new Teacher({ name: 'John', surname: 'Doe', email: 'john.doe@example.com' });
const student = new Student({ name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com' });

teacher.addCourse('Math', 2); // Adding a course using the addCourse method
teacher.addCourse('Science', 3);
student.addCourse('Math', 1);

console.log(ExtendedUser.match(teacher, student)); // Example of using the match method