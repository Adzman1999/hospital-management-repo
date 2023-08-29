const mongoose = require("mongoose");

const roleModel = mongoose.Schema(
  {
    pic: String,
    lastName: String,
    firstName: String,
    middleName: String,
    extensionName: String,
    specialist: String,
    doctorFee: Number,
    department: String,
    shift: String,
    contact: String,
    email: String,
    address: String,
    birthdate: String,
    age: Number,
    sex: String,
    role: String,
  },
  { timestamps: true }
);

const Role = mongoose.model("role", roleModel);

module.exports = Role;
