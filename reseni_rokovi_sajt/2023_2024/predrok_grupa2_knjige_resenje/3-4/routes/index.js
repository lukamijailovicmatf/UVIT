const express = require("express");

const router = express.Router();

const controller = require('../controller/knjige')

router.get('/knjiga', controller.dohvatiKnjigu)
router.post('/novaKnjiga', controller.unesiKnjigu)
router.use('/', controller.prikaziPocetnu)

module.exports = router;