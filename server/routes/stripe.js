const express = require("express");
const router = express.Router();

const {
  checkoutStripe,
  orderSuccess,
  saveOrder,
} = require("../controller/stripe");

router.post("/create-checkout-session", checkoutStripe);
router.get("/order/success", orderSuccess);
router.post("/order/save", saveOrder);

module.exports = router;
