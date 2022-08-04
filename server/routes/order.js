const Menu = require("../models/menu");
const router = require("express").Router();

router.get("/cart/:id", async (req, res) => {
  const selectedProduct = await Menu.findById(req.params.id);
  if (selectedProduct) {
    res.json(selectedProduct);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

module.exports = router;
