const express = require("express");
const {
  createXrayResult,
  addPatientXrayPrice,
} = require("../../controllers/radiology/XrayResultController");
const router = express.Router();

router.route("/add").post(createXrayResult);
router.route("/update").put(addPatientXrayPrice);

module.exports = router;
