const express = require("express");
const router = express.Router();

const { register, login } = require("../controller/user");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/get");

module.exports = router;
