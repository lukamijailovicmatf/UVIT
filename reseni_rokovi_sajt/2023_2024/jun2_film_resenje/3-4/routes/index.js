const express = require("express");

const router = express.Router();

const controller = require('../controller/film')

router.get('/film', controller.dohvatiFilm)
router.post('/novifilm', controller.unesiFilm)
router.post('/noviglumac', controller.unesiGlumca)
router.use('/', controller.prikaziPocetnu)

module.exports = router;