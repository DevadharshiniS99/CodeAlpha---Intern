const express = require("express");
const router = express.Router();
const translateController = require("../controllers/translateController");

// POST request to translate text
router.post("/", translateController.translateText);

module.exports = router;