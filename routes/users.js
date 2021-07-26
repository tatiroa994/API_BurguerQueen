const { Router } = require("express");
const {
  userNew,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require("../controllers/users");

const router = Router();

router.delete("/:id", deleteUser);

router.post("/new", userNew);

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.put("/:id", updateUser);

module.exports = router;
