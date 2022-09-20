const express = require("express");
const router = express.Router();
require("dotenv").config();

const { checkoutStripe } = require("../controller/stripe");

router.post("/create-checkout-session", checkoutStripe);

module.exports = router;
