const express = require("express");
const controller = require("../controllers/pozoriste");

const router = express.Router();

router.use('/', controller.prikaziRepertoar);
router.get('/predstava', controller.prikaziPredstavu);
router.post('/kupi', controller.kupiUlaznice);

module.exports = router;