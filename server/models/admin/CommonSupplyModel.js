const mongoose = require("mongoose");

const commonSupplyModel = mongoose.Schema(
  {
    itemName: String,
    quantity: Number,
    dateOrdered: String,
    dateDelivered: String,
    itemPrice: Number,
  },
  { timestamps: true }
);

const CommonSupply = mongoose.model("common_supply", commonSupplyModel);

module.exports = CommonSupply;
