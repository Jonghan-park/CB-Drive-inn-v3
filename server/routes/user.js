const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const { register, login, mypage } = require("../controller/user");

router.post("/register", register);
router.post("/login", login);
router.get("/mypage", protect, mypage);

module.exports = router;
