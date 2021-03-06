// Create a constructor function for Student objects with: 
// Properties: 
// firstName
// lastName
// birthYear
// academy
// grades - array of numbers
// Methods: 
// getAge() - returns age of student
// getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
// getGradesAverage() - returns the average of the student grades
// Create an array with 3 students
console.log("alo")
function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.academy = academy
    this.grades = grades

    this.getAge = function (birthYear) {
        let currentYear = new Date().getFullYear()
        console.log(currentYear)
        let age = currentYear - birthYear
        console.log(age)
        return age;

    }
    this.getInfo = function () {
        return `This is ${this.firstName} ${this.lastName} from the ${this.academy} academy!`
    }
    this.getGradesAverage = function () {
        let counter = 0
        for (let i = 0; i < this.grades.length; i++) {
            counter += this.grades[i]
        }
        let average = counter / this.grades.length
        return average;
    }
}
let students = []
students.push(new Student("Igor", "Jovanovski", 1999, "SEDC", [10, 9, 8, 7, 6]))
students.push(new Student("Buco", "Ivanovski", 1990, "SEDC", [2, 3, 2, 10, 5]))
students.push(new Student("Andrej", "Hristovski", 1998, "SEDC", [10, 7, 4, 8, 3]))

