const router = require("express").Router();
const {
  getUsers,
  deleteUser,
  updateUser,
  getUsersByID,
} = require("../controllers/usersController");

router.get("/", getUsers);
router.get("/:id", getUsersByID);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
