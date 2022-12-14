const express = require("express");
const router = express.Router();
const { tweetController } = require("../controllers");
const { accessToken } = require("../middleware/auth");
const { upload } = require("../util/multer")

router.post("/search", tweetController.idSearch)
router.post("/", upload.single("image"),accessToken, tweetController.tweetPost);
router.delete("/", accessToken, tweetController.tweetDel);
router.get("/list", tweetController.tweetsList);
router.post("/reply", upload.single("image"),accessToken, tweetController.tweetReply);
router.get("/side", tweetController.tweetTrend)

module.exports = router;
