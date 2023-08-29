const express = require("express");
const {
  createPatientTest,
} = require("../../controllers/laboratory/PatientTestController");
const router = express.Router();

router.route("/add").post(createPatientTest);

module.exports = router;
