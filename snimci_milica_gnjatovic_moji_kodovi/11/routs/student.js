const express = require('express')
const path = require('path')

const router = express.Router()

const studentControler = require('../controller/student')

router.post('/', studentControler.getStudent)
router.post('/update', studentControler.updateStudent, studentControler.getStudent)
router.post('/delete', studentControler.deleteStudent)

module.exports = router