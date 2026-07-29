const studentModel = require('../model/student')

module.exports.getStudent = function(req, resp, next) {
    const data = req.body
    console.log(data)
    let student = studentModel.getStudent(data.username)
    let title = ""

    if (student == null) {
        title = "Student ne postoji."
    } else if (studentModel.checkPassword(student, data.password)) {
        title = "Hello " + student.username
    } else {
        title = "Pogresna sifra"
    }
    
    console.log(student)
    resp.render('student.ejs', {
        title: title,
        student
    })
}

module.exports.updateStudent = function(req, res, next) {
    const data = req.body
    studentModel.updateStudent(data)
    next()
}

module.exports.deleteStudent = function(req, res, next) {
    const data = req.body
    studentModel.deleteStudent(data.username)
    res.redirect('/hello')
}