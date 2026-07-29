const express = require("express");

const router = express.Router();

const controller = require('../controller/turniri')

router.get('/turnir', controller.prikaziTurnir);
router.get('/unesiturnir', controller.unesiMec,controller.prikaziTurnir);
router.get('/', controller.prikaziPocetnu);

module.exports = router;