const express = require('express');

const router = express.Router();

const controller = require('../controllers/rank');

router.get('/', controller.prikaziPocetnuStranicu);
router.get('/prikaziIzvestaj', controller.prikaziNedeljniIzvestaj);
router.post('promeniRang', controller.izmeniRank);

module.exports = router;