const express = require("express");
const controller = require("../controllers/palacinke");

const router = express.Router();

router.get('/', controller.prikaziPocetnu);
router.get('/filter', controller.filterPriloga);
router.post('/dostava', controller.dostava);

module.exports = router;