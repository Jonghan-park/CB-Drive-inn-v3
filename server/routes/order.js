const Menu = require("../models/Menu");
const router = require("express").Router();

router.get("/cart/:id", (req, res) => {
  const selectedProduct = Menu.findById(req.params.id);
  if (selectedProduct) {
    res.json(selectedProduct);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

module.exports = router;
