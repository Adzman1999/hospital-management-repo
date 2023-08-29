const asyncHandler = require("express-async-handler");
const CommonSupply = require("../../models/admin/CommonSupplyModel");

const createCommonSupply = asyncHandler(async (req, res) => {
  try {
    const { itemName, quantity, dateOrdered, dateDelivered, itemPrice } =
      req.body;
    const commonSupplyData = new CommonSupply({
      itemName,
      quantity,
      dateOrdered,
      dateDelivered,
      itemPrice,
    });

    const savedCommonSupply = await commonSupplyData.save();

    res.status(201).json({
      success: true,
      savedCommonSupply,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const allCommonSupplies = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const commonSupplies = await CommonSupply.find(keyword);
  res.status(200).json(commonSupplies.reverse());
});

const updateCommonSupply = asyncHandler(async (req, res) => {
  const { id, itemName, quantity, dateOrdered, dateDelivered, itemPrice } =
    req.body;
  const updatedCommonSupply = await CommonSupply.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        itemName,
        quantity,
        dateOrdered,
        dateDelivered,
        itemPrice,
      },
    }
  );

  if (!updatedCommonSupply) {
    res.status(404);
    throw new Error("Common Supply Not Found");
  } else {
    res.json(updatedCommonSupply);
  }
});

const updateQuantity = asyncHandler(async (req, res) => {
  const { id, quantity } = req.body;
  const updatedQuantity = await CommonSupply.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        quantity,
      },
    }
  );

  if (!updatedQuantity) {
    res.status(404);
    throw new Error("Common Supply Not Found");
  } else {
    res.json(updatedQuantity);
  }
});

module.exports = {
  createCommonSupply,
  allCommonSupplies,
  updateCommonSupply,
  updateQuantity,
};
