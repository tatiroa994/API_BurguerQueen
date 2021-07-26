const { Router } = require("express");
const { ordersNew, updateOrders, deleteOrders, getAllOrders, getOrder} = require("../controllers/orders");

const router = Router();

router.post("/", ordersNew);

router.put("/", updateOrders);

router.delete("/", deleteOrders);

router.get("/", getAllOrders);

router.get("/:id", getOrder);

module.exports = router;
