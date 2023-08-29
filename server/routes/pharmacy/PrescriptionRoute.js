const express = require("express");
const addPatientMedication = require("../../controllers/pharmacy/PrescriptionController");
const router = express.Router();

router.route("/add").post(addPatientMedication);

module.exports = router;
