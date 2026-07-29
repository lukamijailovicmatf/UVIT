const express = require('express');

const kontroler = require('../controllers/artikal');
const router = express.Router();

router.get('/', 
    kontroler.prikaziProdavnicu);

module.exports = router;