const studenti = [
    {ime:'Milica', sifra:'12345', ispiti:[], smer:'informatika', godina:2},
    {ime:'Natalija', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'a1', ocena:9}], smer:'informatika', godina:2},
    {ime:'Milos', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p2', ocena:9}], smer:'informatika', godina:2},
    {ime:'Lazar', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p1', ocena:9}], smer:'informatika', godina:2},
]

function getStudent(ime) {
    for (let s of studenti) {
        if (s.ime == ime) {
            return s
        }
    }
    return null
}

function checkPassword(student, sifra) {
    return student != null && student.sifra == sifra
}

function updateStudent(data) {
    for (let i in studenti) {
        if (studenti[i].ime == data.ime) {
            studenti[i].godina = data.godina
            studenti[i].smer = data.smer
            studenti[i].sifra = data.sifra
        }
    }
}

function deleteStudent(ime) {
    let obrisi = -1
    for (let i in studenti) {
        if (studenti[i].ime == ime) {
            obrisi = i
        }
    }
    studenti.splice(obrisi, 1)
}

function getStudents() {
    let ret = []
    for (let s of studenti) {
        ret.push(s.ime)
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