const examModel = require('../model/exams')

module.exports.getExams = function(req, res, next) {
    const data = req.query
    console.log(data)
    const exams = examModel.getExams()
    res.render('exams.ejs', {
        username: data.username,
        exams
    })
}