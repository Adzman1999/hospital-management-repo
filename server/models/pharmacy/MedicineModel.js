const mongoose = require("mongoose");

const medicineModel = mongoose.Schema(
  {
    medicineNAme: String,
    brand: String,
    manufacturer: String,
    expiration: String,
    dateOrdered: String,
    dateArrived: String,
    dosage: String,
    type: String,
    quantity: Number,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

const Medicine = mongoose.model("Medicine", medicineModel);

module.exports = Medicine;
