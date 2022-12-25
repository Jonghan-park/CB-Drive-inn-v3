const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: {
    type: String,
    default: Date.now(),
  },
  menus: [
    {
      description: String,
      amount_total: Number,
      quantity: Number,
    },
  ],
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
