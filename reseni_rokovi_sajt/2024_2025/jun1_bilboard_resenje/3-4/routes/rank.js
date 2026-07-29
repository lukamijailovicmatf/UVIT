const express = require('express');

const router = express.Router();

const controller = require('../controllers/rank');

router.get('/nedeljniIzvestaj', controller.prikaziNedeljniIzvestaj)
router.get('/updateRank', controller.izmeniRank)
router.get('/', controller.prikaziPocetnuStranicu)

module.exports = router;
