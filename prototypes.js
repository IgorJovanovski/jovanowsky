let obj = {}
let objConst = new Object();

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`I ${this.firstName} ${this.lastName}`)
    }
}

function Student(firstName, lastName, age, academyName, studentId) {
    Person.call(this, firstName, lastName, age);
    this.academyName = academyName
    this.studentId = studentId
    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy `)
    }
}

// Student.prototype = Person.prototype
// Object.setPrototypeOf(Student, Person)
Student.prototype.getAcademy = function (student) {
    return student.academyName
}
let igor = new Student("Igor", "Jovanovski", 20, "SEDC", 173233)
let andrej = new Student("Andrej", "Hristovski", 20, "Brainster", 172420)



function DesignStudent(firstName, lastName, age, academyName, studentId, ) {
    Student.call(this, firstName, lastName, age, academyName, studentId)
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function () {
        console.log(`The student ${this.firstName} is doing an adobe exam!`)
    }
}

function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    Student.call(this, firstName, lastName, age, academyName, studentId)
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function (type) {
        if (type === "group") {
            this.hasGroupProject = true
        }
        else if (type === "individual") {
            this.hasIndividualProject = true
        }

    }
}

function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {
    Student.call(this, firstName, lastName, age, academyName, studentId)
    this.academyPart = academyPart
    this.attendCiscoExam = function () {
        console.log(`The student ${this.firstName} is doing a cisco exam!`)
    }
}
