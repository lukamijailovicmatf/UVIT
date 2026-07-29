// const studenti = [
//     {ime:'Milica', sifra:'12345', ispiti:[], smer:'informatika', godina:2},
//     {ime:'Natalija', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'a1', ocena:9}], smer:'informatika', godina:2},
//     {ime:'Milos', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p2', ocena:9}], smer:'informatika', godina:2},
//     {ime:'Lazar', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p1', ocena:9}], smer:'informatika', godina:2},
// ]

// const studenti = [
//     {"_id":{"$oid":"5c4f1e78dedd200de0e1a6f0"}, "username": "mi17291", "password": "abcd",  "name":"Jovana", "surname":"Peric", "major":"Informatika",  "avg_grade": 8.5, "note": ""},
//     {"_id":{"$oid":"5c4f1ec4dedd200de0e1a6f4"}, "username": "mi17113", "password": "1234",  "name":"Petra", "surname":"Martinovic", "major":"Informatika",  "avg_grade": 7.57, "note": ""},
//     {"_id":{"$oid":"5c4f1ecfdedd200de0e1a6f5"}, "username": "mi18291", "password": "abcd",  "name":"Igor", "surname":"Jovanovic", "major":"Informatika",  "avg_grade": 9.29, "note": ""},
//     {"_id":{"$oid":"5c4f1ea9dedd200de0e1a6f2"}, "username": "mi18023", "password": "1234",  "name":"Ivana", "surname":"Lekic", "major":"Informatika",  "avg_grade": 10.0, "note": ""},
//     {"_id":{"$oid":"5c4f1e8fdedd200de0e1a6f1"}, "username": "mi17044", "password": "abcd",  "name":"Marko", "surname":"Ivic", "major":"Informatika",  "avg_grade": 7.36, "note": ""},
//     {"_id":{"$oid":"5c4f1f76dedd200de0e1a6f9"}, "username": "mr17005", "password": "1234",  "name":"Nikola", "surname":"Vidic", "major":"Racunarstvo i informatika",  "avg_grade": 8.13, "note": ""},
//     {"_id":{"$oid":"5c4f1f81dedd200de0e1a6fa"}, "username": "mr18073", "password": "abcd",  "name":"Nina", "surname":"Stankovic", "major":"Racunarstvo i informatika",  "avg_grade": 9.05, "note": ""},
//     
    // {
    //     "_id":{"$oid":"5c4f1f6cdedd200de0e1a6f8"}, 
    //     "username": "mr17013", 
    //     "password": "1234",  
    //     "name":"Ana", 
    //     "surname":"Ivanovic", 
    //     "major":"Racunarstvo i informatika",  
    //     "avg_grade": 9.31, "note": ""
    // }
// ]

const mongoose = require('mongoose')

// definisemo shemu
const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    surname: String,
    major: String,
    avg_grade: Number,
    note: {
        type: String,
        default: "Nema napomena"
    }
    // major: {
    //     espb: Number,
    //     years: Number
    // },
    // grades: {
    //     type: [Number],
    //     default: []
    // }
}, {collection: 'students'})

// pravimo model nad kojim cemo imati definisane funkcije find, updateOne, ...
const studentModel = mongoose.model(
    'Student', // ime koje je jedinstveno i koristi se na nivou cele aplikacije
    studentSchema
)

async function getStudent(username) {
    // for (let s of studenti) {
    //     if (s.username == username) {
    //         return s
    //     }
    // }
    // return null
    const students = await studentModel.find({username: username}).exec()
    if (students.length == 0)
        return null
    return students[0]
}

function checkPassword(student, password) {
    return student != null && student.password == password
}

async function updateStudent(data) {
    // for (let i in studenti) {
    //     if (studenti[i].username == data.username) {
    //         studenti[i].note = data.note
    //         studenti[i].major = data.major
    //         studenti[i].password = data.password
    //     }
    // }
    await studentModel.updateOne(
        // koja polja update-ujemo
        {username: data.username},
        // na koji nacin menjamo     
        {
            $set: {
                note: data.note,
                major: data.major,
                password: data.password
            }
        }      
    ).exec()
}

async function deleteStudent(username) {
    // let obrisi = -1
    // for (let i in studenti) {
    //     if (studenti[i].username == username) {
    //         obrisi = i
    //     }
    // }
    // studenti.splice(obrisi, 1)
    await studentModel.deleteOne({username: username}).exec()
}

async function getStudents() {
    // let ret = []
    // for (let s of studenti) {
    //     ret.push(s.username)
    // }
    // return ret
    return await studentModel.find({}, {username: true, _id: false}).exec()
}

async function insertStudent(data) {
    // pravimo objekat koji cemo ubaciti
    const newStudent = new studentModel()
    newStudent._id = new mongoose.Types.ObjectId()
    newStudent.username = data.username
    newStudent.password = data.password
    newStudent.major = data.major
    const insertedStudent = await newStudent.save()
}

module.exports = {
    getStudent,
    checkPassword,
    updateStudent,
    deleteStudent,
    getStudents,
    insertStudent
}