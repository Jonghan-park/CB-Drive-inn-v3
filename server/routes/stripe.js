const express = require("express");
const router = express.Router();

const { checkoutStripe, orderSuccess } = require("../controller/stripe");

router.post("/create-checkout-session", checkoutStripe);
router.get("/order/success", orderSuccess);

module.exports = router;
