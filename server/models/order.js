const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  menus: [
    {
      menu: { type: mongoose.Types.ObjectId, ref: "Menu", required: true },
      quantity: Number,
      total: menu.price * quantity,
    },
  ],
  stripeId: {
    type: String,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
