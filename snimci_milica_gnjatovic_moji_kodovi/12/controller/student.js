const studentModel = require('../model/student')

module.exports.getStudent = async function(req, res, next) {
    try {
        const data = req.body
        console.log(data)
        let student = await studentModel.getStudent(data.username)
        let title = ""

        if (student == null) {
            title = "Student ne postoji."
        } else if (studentModel.checkPassword(student, data.password)) {
            title = "Hello " + student.username
        } else {
            title = "Pogresna sifra"
        }
    
        console.log(student)
        res.render('student.ejs', {
            title: title,
            student
        })
    } catch (err) {
        next(err)
    }
}

module.exports.updateStudent = async function(req, res, next) {
    try {
        const data = req.body
        await studentModel.updateStudent(data)
        next()
    } catch (err) {
        next(err)
    }
}

module.exports.deleteStudent = async function(req, res, next) {
    try {
        const data = req.body
        await studentModel.deleteStudent(data.username)
        res.redirect('/hello')
    } catch (err) {
        next(err)
    }
}

module.exports.newStudent = async function(req, res, next) {
    try {
        const data = req.body
        console.log(data)
        await studentModel.insertStudent()
        next()  // nakon sto se ovo izvrsi, zelimo da odemo u stranicu gde smo ulogovani
    } catch (err) {
        next(err)
    }
}