const { response } = require("express");
const { productModel } = require("../models/Product");

const deleteProduct = async (req, res = response) => {
 const product = await productModel.findByIdAndDelete(req.params.id)
  res.json({
    ok: true,
    msg: `Producto ${product.name} eliminado`,
  });
};

const getProducts = async (req, res = response) => {
  const allProducts = await productModel.find();
  res.json(allProducts);
};

const getProduct = async (req, res = response) => {
  const product = await productModel.findById(req.params.id);
  res.json(product);
};

const newProduct = async (req, res = response) => {
  const newProduct = new productModel({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    type: req.body.type,
  });
  console.log(res.statusMessage, res);
  await newProduct.save();
  res.json({
    ok: true,
    msg: "producto creado",
  });
};

const updateProduct = async (req, res = response) => {
  const product = await productModel.findByIdAndUpdate(req.params.id, req.body)
  res.json({
    ok: true,
    msg: `Producto ${product.name} actualizado`,
  });
};

module.exports = {
  getProduct,
  getProducts,
  newProduct,
  deleteProduct,
  updateProduct,
};
