const { response } = require("express");
const { tablesModel } = require("../models/tables");

const newOrder = async(req, res = response) => {
  try {
    const newOrder = new tablesModel({
      _id: req.body._id,
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

const updateOrder = async(req, res = response) => {
  try {
    const order = await tablesModel.findByIdAndUpdate(req.params.id, req.body);
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

const deleteOrder = async (req, res = response) => {
  try {
    const order = await tablesModel.findByIdAndDelete(req.params.id);
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
    const allOrders = await tablesModel.find();
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener ordenes",
    });
  }
};

const getAllOrdersByStatus = async (req, res = response) => {
  try {
    const { status } = req.query;
    const allOrders = await tablesModel.find({status});
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener ordenes",
    });
  }
};

const getOrder = async(req, res = response) => {
  try {
    const order = await tablesModel.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener la orden",
    });
  }
};

module.exports = {
  newOrder,
  updateOrders,
  deleteOrders,
  getAllOrders,
  getOrder,
  getAllOrdersByStatus
};
