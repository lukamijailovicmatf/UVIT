// const exams = [
//     {"_id":{"$oid":"5c4f1e78dedd200de0e1a6f0"}, "username": "mi17291", "password": "abcd",  "name":"Jovana", "surname":"Peric", "major":"Informatika",  "avg_grade": 8.5, "note": ""},
//     {"_id":{"$oid":"5c4f1ec4dedd200de0e1a6f4"}, "username": "mi17113", "password": "1234",  "name":"Petra", "surname":"Martinovic", "major":"Informatika",  "avg_grade": 7.57, "note": ""},
//     {"_id":{"$oid":"5c4f1ecfdedd200de0e1a6f5"}, "username": "mi18291", "password": "abcd",  "name":"Igor", "surname":"Jovanovic", "major":"Informatika",  "avg_grade": 9.29, "note": ""},
//     {"_id":{"$oid":"5c4f1ea9dedd200de0e1a6f2"}, "username": "mi18023", "password": "1234",  "name":"Ivana", "surname":"Lekic", "major":"Informatika",  "avg_grade": 10.0, "note": ""},
//     {"_id":{"$oid":"5c4f1e8fdedd200de0e1a6f1"}, "username": "mi17044", "password": "abcd",  "name":"Marko", "surname":"Ivic", "major":"Informatika",  "avg_grade": 7.36, "note": ""},
//     {"_id":{"$oid":"5c4f1f76dedd200de0e1a6f9"}, "username": "mr17005", "password": "1234",  "name":"Nikola", "surname":"Vidic", "major":"Racunarstvo i informatika",  "avg_grade": 8.13, "note": ""},
//     {"_id":{"$oid":"5c4f1f81dedd200de0e1a6fa"}, "username": "mr18073", "password": "abcd",  "name":"Nina", "surname":"Stankovic", "major":"Racunarstvo i informatika",  "avg_grade": 9.05, "note": ""},
//     {"_id":{"$oid":"5c4f1f6cdedd200de0e1a6f8"}, "username": "mr17013", "password": "1234",  "name":"Ana", "surname":"Ivanovic", "major":"Racunarstvo i informatika",  "avg_grade": 9.31, "note": ""},
//     {"_id":{"$oid":"5c4f1f8cdedd200de0e1a6fb"}, "username": "mr17331", "password": "abcd",  "name":"Mirko", "surname":"Jokic", "major":"Racunarstvo i informatika",  "avg_grade": 8.29, "note": ""},
//     {"_id":{"$oid":"5c4f1fdddedd200de0e1a6fc"}, "username": "mr17201", "password": "1234",  "name":"Nikola", "surname":"Burkic", "major":"Profesor",  "avg_grade": 8.5, "note": ""},
//     {"_id":{"$oid":"5c4f1feadedd200de0e1a6fd"}, "username": "ml18100", "password": "abcd",  "name":"Filip", "surname":"Lazarevic", "major":"Profesor",  "avg_grade": 7.79, "note": ""},
//     
    // {
    // "_id":{"$oid":"5c4f1ff9dedd200de0e1a6fe"}, 
    // "username": "ml17200", 
    // "password": "1234",  
    // "name":"Milan", 
    // "surname":"Predic", 
    // "major":"Profesor",  
    // "avg_grade": 8.0, "note": ""
    // }
// ]

const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    subject: String,
    date: Date,
    grade: Number
}, {collection: "exams"})

const examModel = mongoose.model('Exam', examSchema)

function getExams() {
    // return exams
    await examModel.find()
        .populate('student', 'username name')
        .exec()
}

module.exports = {
    getExams
}