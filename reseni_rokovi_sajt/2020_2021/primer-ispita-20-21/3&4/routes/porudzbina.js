const express = require('express');
const kontroler = require('../controllers/porudzbina');

const router = express.Router();
router.get('/napravi', 
    kontroler.prikaziPorudzbinu);

router.post('/narucivanje', 
    kontroler.kreirajPorudzbinu);

module.exports = router;