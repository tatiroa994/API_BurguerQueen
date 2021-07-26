const { response } = require("express");
const { usersModel } = require("../models/Users");

const userNew = async (req, res = response) => {
  try {
    const newUser = new usersModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      roles: req.body.roles
    });
    await newUser.save();
    res.json({
      ok: true,
      msg: "usuario creado /new",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al crear usuario",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await usersModel.findByIdAndDelete(req.params.id);
    res.json({
      ok: true,
      msg: `usuario ${user.name} eliminada`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al eliminar usuario ",
    });
  }
};

const getAllUsers = async (req, res = response) => {
  try {
    const allUsers = await usersModel.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener usuarios",
    });
  }
};

const getUser = async (req, res = response) => {
  try {
    const user = await usersModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al obtener el usuario",
    });
  }
};

const updateUser = async (req, res = response) => {
  try {
    const user = await usersModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      ok: true,
      msg: `usuario ${user.name} actualizado`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al actualizar usuario ",
    });
  }
};

module.exports = {
  userNew,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
