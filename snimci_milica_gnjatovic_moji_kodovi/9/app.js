const express = require('express')

const app = express()
const path = require('path')

const studentRouter = require('./routs/student')

// za isporucivanje statickih resursa na primer .css, java script
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './views')

// ako je putanja koju prepoznas '/hello' kao odgovor vrati fajl index.html
app.use('/hello', function(req, resp, next) {
    resp.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.use('/student', studentRouter)

app.use(function(req, resp, next) {
   resp.status(404).sendFile(path.join(__dirname, 'views', 'greska.html'))
})

app.use(function(err, req, resp, next) {
    console.log("GRESKA")
    console.log(err)
})

module.exports = app