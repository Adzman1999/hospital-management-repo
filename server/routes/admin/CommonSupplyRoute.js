const express = require("express");
const {
  createCommonSupply,
  updateCommonSupply,
  allCommonSupplies,
  updateQuantity,
} = require("../../controllers/admin/CommonSupply");
// const protect = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/create").post(createCommonSupply);
router.route("/update").put(updateCommonSupply);
router.route("/update-qty").put(updateQuantity);
router.route("/").get(allCommonSupplies);

module.exports = router;
