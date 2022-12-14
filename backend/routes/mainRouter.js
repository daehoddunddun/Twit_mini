const express = require("express");
const router = express.Router();
const { mainController } = require("../controllers");
const { accessToken } = require("../middleware/auth");

router.get("/", accessToken, mainController.mainFeed);
router.post("/search", mainController.mainSearch);

module.exports = router;