const express = require("express");
const router = express.Router();

const banka = require("../controllers/banka");

router.get('/', banka.showLogin);
router.post('/login', banka.loginUser);
router.post('/azuriraj', banka.azurirajTabelu);

module.exports = router;