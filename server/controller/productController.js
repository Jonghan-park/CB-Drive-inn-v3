const Menu = require("../models/Menu");

const getAllProducts = async (req, res) => {
  try {
    const Menus = await Menu.find({});
    console.log(Menus);
    res.json(Menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = getAllProducts;
