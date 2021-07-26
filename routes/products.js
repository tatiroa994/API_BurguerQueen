const { Router } = require("express");
const {
  deleteProduct,
  getProducts,
  getProduct,
  newProduct,
  updateProduct,
} = require("../controllers/products");

const router = Router();

router.delete("/:id", deleteProduct); //ok

router.get("/", getProducts); //ok

router.get("/:id", getProduct); //ok

router.post("/", newProduct); //ok

router.put("/:id", updateProduct);

module.exports = router;
