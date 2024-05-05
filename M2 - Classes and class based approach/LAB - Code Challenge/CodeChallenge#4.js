/*Code Challenge #4
Scenario
Let's try to put all the previously prepared elements together. Create a Tutoring class that will have two lists of users: students and teachers separately.

Define methods in it:

getStudentByName(name, surname) - which will return a student object with the given name and surname (or undefined if the student has not been added before)
getTeacherByName(name, surname) - which will return the teacher object with the given name and surname (or undefined if the teacher has not been added before)
getStudentsForTeacher(teacher) - which will return an array of students that teacher is able to tutor;
getTeacherForStudent(student) - which will return an array of teachers able to tutor the student;
addStudent(name, surname, email) - which will add a new student object to the list;
addTeacher(name, surname, email) - which will add a new teacher object to the list.*/
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
        this.courses.push({ course, level });
    }

    removeCourse(course) {
        this.courses = this.courses.filter(item => item.course !== course);
    }

    editCourse(course, level) {
        const courseIndex = this.courses.findIndex(item => item.course === course);
        if (courseIndex !== -1) {
            this.courses[courseIndex].level = level;
        }
    }

    sendMessage(from, message) {
        this.messages.push({ from: from.email, to: this.email, content: message });
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        for (const message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`);
        }
    }
}

class Student extends User {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'student' });
    }
}

class Teacher extends User {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'teacher' });
    }
}

class ExtendedUser extends User {
    constructor({ name, surname, email, role }) {
        super({ name, surname, email, role });
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.name = firstName;
        this.surname = lastName;
    }

    static match(teacher, student, course) {
        const matchedCourses = [];
        for (const scourse of student.courses) {
            for (const tcourse of teacher.courses) {
                if (scourse.course === tcourse.course && scourse.level <= tcourse.level) {
                    matchedCourses.push(scourse);
                }
            }
        }
        if (course) {
            return matchedCourses.find(item => item.course === course);
        }
        return matchedCourses;
    }
}

class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        return this.students.find(student => student.name === name && student.surname === surname);
    }

    getTeacherByName(name, surname) {
        return this.teachers.find(teacher => teacher.name === name && teacher.surname === surname);
    }

    getStudentsForTeacher(teacher) {
        return this.students.filter(student => ExtendedUser.match(teacher, student).length > 0);
    }

    getTeacherForStudent(student) {
        return this.teachers.filter(teacher => ExtendedUser.match(teacher, student).length > 0);
    }

    addStudent(name, surname, email) {
        this.students.push(new Student({ name, surname, email }));
    }

    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({ name, surname, email }));
    }
}

// Example usage:
const tutoring = new Tutoring();

tutoring.addStudent('Radheshyam', 'Sharma', 'radheshyam@example.com');
tutoring.addStudent('Kashish', 'Raut', 'kashish.raut@example.com');
tutoring.addTeacher('Laxmi', 'Devi', 'laxmirsharma@example.com');

const student = tutoring.getStudentByName('Radheshyam', 'Sharma');
const teacher = tutoring.getTeacherByName('Laxmi', 'Devi');

console.log(student); // Output: Student { name: 'Radheshyam', surname: 'Sharma', email: 'radheshyam@example.com', role: 'student', messages: [], courses: [] }
console.log(teacher); // Output: Teacher { name: 'Laxmi', surname: 'Devi', email: 'kaxmirsharma@example.com', role: 'teacher', messages: [], courses: [] }