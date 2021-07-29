const { Router } = require("express");
const {
  ordersNew,
  updateOrders,
  deleteOrders,
  getAllOrders,
  getOrder,
  getAllOrdersByStatus,
} = require("../controllers/orders");

const router = Router();

router.post("/new", ordersNew);

router.put("/:id", updateOrders);

router.delete("/:id", deleteOrders);

router.get("/", getAllOrders);

router.get("/status", getAllOrdersByStatus);

router.get("/:id", getOrder);

module.exports = router;
