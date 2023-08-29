const BloodBank = require("../models/laboratory/BloodBankModel");

const BloodBankAdded = () => {
  BloodBank.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new BloodBank({
        donor: {
          bloodType: "O",
        },
      }).save();

      new BloodBank({
        donor: {
          bloodType: "A+",
        },
      }).save();

      new BloodBank({
        donor: {
          bloodType: "A-",
        },
      }).save();

      new BloodBank({
        donor: {
          bloodType: "B-",
        },
      }).save();

      new BloodBank({
        donor: {
          bloodType: "B+",
        },
      }).save();

      new BloodBank({
        donor: {
          bloodType: "AB+",
        },
      }).save();

      new BloodBank({
        donor: {
          bloodType: "AB-",
        },
      }).save();
    }
  });
};

module.exports = BloodBankAdded;
