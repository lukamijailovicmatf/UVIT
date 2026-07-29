const path = require('path')

const studentModel = require('../model/student')

module.exports.login = function(req, resp, next) {
    // resp.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
    let studenti = studentModel.getStudents()
    resp.render('index.ejs', {studenti})
}