const express = require("express");
const router = express.Router();

const { checkoutStripe } = require("../controller/stripe");

router.post("/create-checkout-session", checkoutStripe);

module.exports = router;
