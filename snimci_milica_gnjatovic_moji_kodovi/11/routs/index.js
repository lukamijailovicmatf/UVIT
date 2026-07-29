const express = require('express')
const path = require('path')

const indexControler = require('../controller/index.js')

const router = express.Router()

router.use('/', indexControler.login)

module.exports = router