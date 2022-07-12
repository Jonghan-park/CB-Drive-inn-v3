const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controller/private");
const { protect } = require("../middleware/auth");

router.route("/mypage").get(protect, getPrivateData);

module.exports = router;
