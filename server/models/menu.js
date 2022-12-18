const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  img: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  desc: {
    type: String,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
