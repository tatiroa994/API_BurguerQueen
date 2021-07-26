const { Router } = require("express");
const { userNew, userLogin, tokenRevalidate } = require("../controllers/auth");

const router = Router();

router.post("/", userLogin);

router.get("/renew", tokenRevalidate);

module.exports = router;
