const express = require("express");
const {
  createDesignatedSupply,
  updateDesignatedSupply,
  allDesignatedSupplies,
} = require("../../controllers/admin/DesignatedSupplyContoller");
// const protect = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/create").post(createDesignatedSupply);
router.route("/update").put(updateDesignatedSupply);
router.route("/").get(allDesignatedSupplies);

module.exports = router;
