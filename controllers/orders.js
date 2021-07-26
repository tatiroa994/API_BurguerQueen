const { response } = require("express");

const ordersNew = (req, res = response) => {
  const { name, options, price, quantity } = req.body;
  console.log(req.body);
  res.json({
    ok: true,
    msg: "crear pedido /new",
  });
};

const updateOrders = (req, res = response) => {
  res.json({
    ok: true,
    msg: "order modificada",
  });
};


const deleteOrders = (req, res = response) => {
  res.json({
    ok: true,
    msg: "orden eliminada /detele",
  });
};

const getAllOrders = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Estas son todas las ordenes",
  });
};

const getOrder = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Order No :id",
  });
};




module.exports = {
  ordersNew,
  updateOrders,
  deleteOrders,
  getAllOrders,
  getOrder
};
