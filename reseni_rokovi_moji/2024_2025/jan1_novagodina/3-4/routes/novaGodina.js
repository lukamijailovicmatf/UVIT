const express = require('express');

const router = express.Router();

const controller = require('../controllers/novaGodina');

router.use('/pocetna', controller.prikaziPocetnuStranicu);
router.get('/kid', controller.prikaziDete);
router.post('/unesi', controller.unesiDelo);

module.exports = router;