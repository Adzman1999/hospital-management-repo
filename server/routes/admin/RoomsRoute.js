const express = require("express");
const {
  createRoom,
  updateRoom,
  allRooms,
} = require("../../controllers/admin/RoomsController");
// const protect = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/create").post(createRoom);
router.route("/update").put(updateRoom);
router.route("/").get(allRooms);

module.exports = router;
