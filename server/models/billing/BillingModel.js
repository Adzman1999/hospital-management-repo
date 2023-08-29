const mongoose = require("mongoose");

const billingModel = mongoose.Schema(
  {
    medicineTotalPrice: Number,
    roomTotalPrice: Number,
    xrayTotalPrice: Number,
    DoctorFeeTotalPrice: String,
  },
  { timestamps: true }
);

const Billing = mongoose.model("billing", billingModel);

module.exports = Billing;
