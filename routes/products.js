const { Router } = require("express");
const {
  deleteProduct,
  getProducts,
  getProduct,
  newProduct,
  updateProduct,
  getProductsByType
} = require("../controllers/products");

const router = Router();

router.delete("/:id", deleteProduct); 

router.get("/type", getProductsByType); 

router.get("/", getProducts); 

router.get("/:id", getProduct);

router.post("/", newProduct); 

router.put("/:id", updateProduct);

module.exports = router;
