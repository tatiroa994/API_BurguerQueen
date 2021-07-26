const { response } = require("express");

const userNew = (req, res = response) => {
  const { email, name, password } = req.body;
  console.log(req.body);
  res.json({
    ok: true,
    msg: "crear usuario /new",
  });
};

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
  userNew,
  userLogin,
  tokenRevalidate,
};
