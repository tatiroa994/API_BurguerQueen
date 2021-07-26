const { response } = require("express");
const { ordersModel } = require("../models/Orders");

const ordersNew = async(req, res = response) => {
  try {
    const newOrder = new ordersModel({
      userId: req.body.userId,
      client: req.body.client,
      products: req.body.products,
      status: req.body.status,
      table: req.body.table,
      "total-order": req.body["total-order"],
    });
    await newOrder.save();
    res.json({
      ok: true,
      msg: "Pedido creado /new",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al crear orden",
    });
  }
};

const updateOrders = async(req, res = response) => {
  try {
    const order = await ordersModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      ok: true,
      msg: `Order ${order.id} actualizado`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al actualizar order ",
    });
  }
};

const deleteOrders = async (req, res = response) => {
  try {
    const order = await ordersModel.findByIdAndDelete(req.params.id);
    res.json({
      ok: true,
      msg: `orden ${order.id} eliminada`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al eliminar order ",
    });
  }
};

const getAllOrders = async (req, res = response) => {
  try {
    const allOrders = await ordersModel.find();
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener ordenes",
    });
  }
};

const getOrder = async(req, res = response) => {
  try {
    const order = await ordersModel.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener la orden",
    });
  }
};

module.exports = {
  ordersNew,
  updateOrders,
  deleteOrders,
  getAllOrders,
  getOrder,
};
