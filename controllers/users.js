const { response } = require("express");

const userNew = (req, res = response) => {
  const { email, name, password } = req.body;
  console.log(req.body);
  res.json({
    ok: true,
    msg: "crear usuario /new",
  });
};

const deleteUser = (req, res) =>
  res.json({
    ok: true,
    msg: "Usuario eliminado /",
  });

const getAllUsers = (req, res) =>
  res.json({
    ok: true,
    msg: "Todos los usuarrios",
  });

const getUser = (req, res) =>
  res.json({
    ok: true,
    msg: "Un solo usuario",
  });

const updateUser = (req, res) =>
  res.json({
    ok: true,
    msg: "Isuario actualizado",
  });

module.exports = {
  userNew,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
