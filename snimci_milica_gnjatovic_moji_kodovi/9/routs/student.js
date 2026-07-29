const express = require('express')
const path = require('path')

const router = express.Router()

const studenti = [
    {ime:'Milica', sifra:'12345', ispiti:[]},
    {ime:'Natalija', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'a1', ocena:9}]},
    {ime:'Milos', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p2', ocena:9}]},
    {ime:'Lazar', sifra:'12345', ispiti:[{predmet:'uvit', ocena:10}, {predmet:'p1', ocena:9}]},
]

// router.get('/', function(req, resp, next) {
//     const data = req.query
//     console.log(data)
//     resp.sendFile(path.join(__dirname, '..', 'views', 'student.html'))
// })

router.post('/', function(req, resp, next) {
    const data = req.body
    console.log(data)
    let student = null
    let title = "Neuspesno prijavljivanje"
    for (let s of studenti) {
        if (s.ime == data.ime && s.sifra == data.sifra) {
            title = "Hello, " + s.ime
            student = s
            break
        }
    }
    console.log(student)
    resp.render('student.ejs', {
        title: title,
        student
    })
    // resp.sendFile(path.join(__dirname, '..', 'views', 'student.html'))
})

module.exports = router