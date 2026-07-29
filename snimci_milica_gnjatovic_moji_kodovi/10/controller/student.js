const studentModel = require('../model/student')

module.exports.getStudent = function(req, resp, next) {
    const data = req.body
    console.log(data)
    let student = studentModel.getStudent(data.ime)
    let title = ""

    if (student == null) {
        title = "Student ne postoji."
    } else if (studentModel.checkPassword(student, data.sifra)) {
        title = "Hello " + student.ime
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
    studentModel.deleteStudent(data.ime)
    res.redirect('/hello')
}