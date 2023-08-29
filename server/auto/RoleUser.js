const User = require("../models/UserModel");

const RoleUser = () => {
  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User({
        username: "admin",
        password: "admin",
      }).save();

      new User({
        username: "doctor",
        password: "doctor",
      }).save();

      new User({
        username: "nurse",
        password: "nurse",
      }).save();

      new User({
        username: "labpersonnel",
        password: "labpersonnel",
      }).save();

      new User({
        username: "accountant",
        password: "accountant",
      }).save();

      new User({
        username: "pharmacist",
        password: "pharmacist",
      }).save();

      new User({
        username: "radiologist",
        password: "radiologist",
      }).save();
    }
  });
};

module.exports = RoleUser;
