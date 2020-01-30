fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%206%20-%20Functions%20Part%202/materials/students.json')
    .then(res => res.json())
    .then(data => {

        let aboveThree = data.filter(el => el.averageGrade > 3)
        console.log(aboveThree)

        let females = data.filter(el => el.gender === "Female" && el.averageGrade === 5)
            .map(el => el.firstName)
        console.log(females)

        let maleStudents = data.filter(el => el.city === "Skopje" && el.age > 18)
            .map(el => `${el.firstName} ${el.lastName}`)
        console.log(maleStudents)

        let avgFemaleAge24 = data.filter(el => el.gender === "Female" && el.age > 24)
            .map(el => el.firstName)
        console.log(avgFemaleAge24)

        let studentsWithB = data.filter(el => el.gender === "Male" && el.firstName[0] === "B" && el.averageGrade > 2)
            .map(el => el.firstName)
        console.log(studentsWithB)
    })
