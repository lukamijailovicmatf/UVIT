const express = require("express");

const router = express.Router();

const calendarControlles = require('../controllers/calendar')

router.post('/month', calendarControlles.prikaziMesec)
router.post('/obrisi', calendarControlles.obrisiMesec, calendarControlles.prikaziMesec)
router.use('/', calendarControlles.prikaziPocetnu)

module.exports = router;
