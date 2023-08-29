const express = require("express");
const { authUser, allUsers } = require("../controllers/UserControllers");
const protect = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/").get(allUsers);
router.post("/login", authUser);

module.exports = router;
