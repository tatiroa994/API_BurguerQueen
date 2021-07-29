const { response } = require("express");
const { productModel } = require("../models/Product");

const deleteProduct = async (req, res = response) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    res.json({
      ok: true,
      msg: `Producto ${product.name} eliminado`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al eliminar",
    });
  }
};

const getProducts = async (req, res = response) => {
  try {
    const allProducts = await productModel.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener productos",
    });
  }
};

const getProductsByType = async (req, res = response) => {
  try {
    const { type } = req.query;
    const allProducts = await productModel.find({ type });
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener productos",
    });
  }
};

const getProduct = async (req, res = response) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener el producto ",
    });
  }
};

const newProduct = async (req, res = response) => {
  try {
    const newProduct = new productModel({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      type: req.body.type,
      subtype: req.body.subtype,
    });
    await newProduct.save();
    res.json({
      ok: true,
      msg: "producto creado",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al crear nuevo producto ",
    });
  }
};

const updateProduct = async (req, res = response) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({
      ok: true,
      msg: `Producto ${product.name} actualizado`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al actualizar producto ",
    });
  }
};

module.exports = {
  getProduct,
  getProducts,
  newProduct,
  deleteProduct,
  updateProduct,
  getProductsByType,
};
