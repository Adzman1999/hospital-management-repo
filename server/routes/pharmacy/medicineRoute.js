const express = require("express");
const {
  createMedicine,
  allMedicines,
  updateMedicine,
  updateStock,
  searchMedicine,
} = require("../../controllers/pharmacy/medicineController");
const router = express.Router();

router.route("/create").post(createMedicine);
router.route("/").get(allMedicines);
router.route("/get-medicine").get(searchMedicine);
router.route("/update").put(updateMedicine);
router.route("/update-stock").put(updateStock);

module.exports = router;
