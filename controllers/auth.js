const { response } = require("express");

const userLogin = (req, res) =>
  res.json({
    ok: true,
    msg: "Login de usuario /",
  });

const tokenRevalidate = (req, res) =>
  res.json({
    ok: true,
    msg: "renew",
  });

module.exports = {
  userLogin,
  tokenRevalidate,
};
