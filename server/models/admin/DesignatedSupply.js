const mongoose = require("mongoose");

const designatedSupply = mongoose.Schema(
  {
    itemName: String,
    quantity: Number,
    department: String,
    receiver: String,
    dateDesignated: String,
  },
  { timestamps: true }
);

const DesignatedSupply = mongoose.model("designated_supply", designatedSupply);

module.exports = DesignatedSupply;
