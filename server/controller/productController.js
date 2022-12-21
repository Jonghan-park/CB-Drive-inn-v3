const Menu = require("../models/menu");

const getAllProducts = async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports.getAllProducts = getAllProducts;
