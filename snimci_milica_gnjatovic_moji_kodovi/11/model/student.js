// const studenti = [
//     {ime:'Milica', sifra:'12345', ispiti:[], smer:'informatika', godina:2},
//     {ime:'Natalija', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'a1', ocena:9}], smer:'informatika', godina:2},
//     {ime:'Milos', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p2', ocena:9}], smer:'informatika', godina:2},
//     {ime:'Lazar', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p1', ocena:9}], smer:'informatika', godina:2},
// ]

const studenti = [
    {"_id":{"$oid":"5c4f1e78dedd200de0e1a6f0"}, "username": "mi17291", "password": "abcd",  "name":"Jovana", "surname":"Peric", "major":"Informatika",  "avg_grade": 8.5, "note": ""},
    {"_id":{"$oid":"5c4f1ec4dedd200de0e1a6f4"}, "username": "mi17113", "password": "1234",  "name":"Petra", "surname":"Martinovic", "major":"Informatika",  "avg_grade": 7.57, "note": ""},
    {"_id":{"$oid":"5c4f1ecfdedd200de0e1a6f5"}, "username": "mi18291", "password": "abcd",  "name":"Igor", "surname":"Jovanovic", "major":"Informatika",  "avg_grade": 9.29, "note": ""},
    {"_id":{"$oid":"5c4f1ea9dedd200de0e1a6f2"}, "username": "mi18023", "password": "1234",  "name":"Ivana", "surname":"Lekic", "major":"Informatika",  "avg_grade": 10.0, "note": ""},
    {"_id":{"$oid":"5c4f1e8fdedd200de0e1a6f1"}, "username": "mi17044", "password": "abcd",  "name":"Marko", "surname":"Ivic", "major":"Informatika",  "avg_grade": 7.36, "note": ""},
    {"_id":{"$oid":"5c4f1f76dedd200de0e1a6f9"}, "username": "mr17005", "password": "1234",  "name":"Nikola", "surname":"Vidic", "major":"Racunarstvo i informatika",  "avg_grade": 8.13, "note": ""},
    {"_id":{"$oid":"5c4f1f81dedd200de0e1a6fa"}, "username": "mr18073", "password": "abcd",  "name":"Nina", "surname":"Stankovic", "major":"Racunarstvo i informatika",  "avg_grade": 9.05, "note": ""},
    {"_id":{"$oid":"5c4f1f6cdedd200de0e1a6f8"}, "username": "mr17013", "password": "1234",  "name":"Ana", "surname":"Ivanovic", "major":"Racunarstvo i informatika",  "avg_grade": 9.31, "note": ""}
]

function getStudent(username) {
    for (let s of studenti) {
        if (s.username == username) {
            return s
        }
    }
    return null
}

function checkPassword(student, password) {
    return student != null && student.password == password
}

function updateStudent(data) {
    for (let i in studenti) {
        if (studenti[i].username == data.username) {
            studenti[i].note = data.note
            studenti[i].major = data.major
            studenti[i].password = data.password
        }
    }
}

function deleteStudent(username) {
    let obrisi = -1
    for (let i in studenti) {
        if (studenti[i].username == username) {
            obrisi = i
        }
    }
    studenti.splice(obrisi, 1)
}

function getStudents() {
    let ret = []
    for (let s of studenti) {
        ret.push(s.username)
    }
    return ret
}

module.exports = {
    getStudent,
    checkPassword,
    updateStudent,
    deleteStudent,
    getStudents
}