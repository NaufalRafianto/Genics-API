const router = require("express").Router();
const {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:category", getProductsByCategory);

router.post("/", saveProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
