const examModel = require('../model/exams')

module.exports.getExams = async function(req, res, next) {
    const data = req.query
    console.log(data)
    const exams = await examModel.getExams()
    res.render('exams.ejs', {
        username: data.username,
        exams
    })
}