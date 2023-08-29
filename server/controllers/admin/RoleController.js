const asyncHandler = require("express-async-handler");
const Role = require("../../models/admin/RoleModel");

const createRole = asyncHandler(async (req, res) => {
  try {
    const {
      pic,
      lastName,
      firstName,
      middleName,
      extensionName,
      specialist,
      doctorFee,
      department,
      shift,
      contact,
      email,
      address,
      birthdate,
      age,
      sex,
      role,
    } = req.body;
    const roleData = new Role({
      pic,
      lastName,
      firstName,
      middleName,
      extensionName,
      specialist,
      doctorFee,
      department,
      shift,
      contact,
      email,
      address,
      birthdate,
      age,
      sex,
      role,
    });

    const savedRole = await roleData.save();

    res.status(201).json({
      success: true,
      savedRole,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const allRoles = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const roles = await Role.find(keyword);
  res.status(200).json(roles.reverse());
});

const fetchDoctor = asyncHandler(async (req, res) => {
  const doctors = await Role.find({ role: "doctor" });
  res.status(200).json(doctors.reverse());
});

const fetchNurse = asyncHandler(async (req, res) => {
  const nurse = await Role.find({ role: "nurse" });
  res.status(200).json(nurse.reverse());
});



const updateRole = asyncHandler(async (req, res) => {
  const {
    id,
    pic,
    lastName,
    firstName,
    middleName,
    extensionName,
    specialist,
    doctorFee,
    department,
    shift,
    contact,
    email,
    address,
    birthdate,
    age,
    sex,
    role,
  } = req.body;
  const updatedRole = await Role.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        pic,
        lastName,
        firstName,
        middleName,
        extensionName,
        specialist,
        doctorFee,
        department,
        shift,
        contact,
        email,
        address,
        birthdate,
        age,
        sex,
        role,
      },
    }
  );

  if (!updatedRole) {
    res.status(404);
    throw new Error("Role Not Found");
  } else {
    res.json(updatedRole);
  }
});


const searchRole = asyncHandler(async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { firstName: { $regex: req.query.search, $options: "i" } },
            { middleName: { $regex: req.query.search, $options: "i" } },
            { lastName: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const name = await Role.find(keyword);
    res.send(name);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = { createRole, allRoles, updateRole, fetchDoctor, fetchNurse, searchRole };
