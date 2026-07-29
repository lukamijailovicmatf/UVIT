const express = require('express')

const router = express.Router()

const examsControler = require('../controller/exams')

router.use('/', examsControler.getExams)

module.exports = router