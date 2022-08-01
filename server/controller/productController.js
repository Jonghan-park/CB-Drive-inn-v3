const Menu = require("../models/Menu");

const getAllProducts = async (req, res) => {
  try {
    const menus = await Menu.find({});
    console.log(menus);
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports.getAllProducts = getAllProducts;
