const express = require("express");
const {
  createRole,
  allRoles,
  updateRole,
  fetchDoctor,
  fetchNurse,
  searchRole,
} = require("../../controllers/admin/RoleController");
// const protect = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/create").post(createRole);
router.route("/update").put(updateRole);
router.route("/").get(allRoles);
router.route("/doctor").get(fetchDoctor);
router.route("/nurse").get(fetchNurse);
router.route("/keyword").get(searchRole);

module.exports = router;
