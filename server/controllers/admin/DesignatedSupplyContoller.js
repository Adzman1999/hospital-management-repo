const asyncHandler = require("express-async-handler");
const DesignatedSupply = require("../../models/admin/DesignatedSupply");

const createDesignatedSupply = asyncHandler(async (req, res) => {
  try {
    const { itemName, quantity, department, receiver, dateDesignated } =
      req.body;
    const DesignatedSupplyData = new DesignatedSupply({
      itemName,
      quantity,
      department,
      receiver,
      dateDesignated,
    });

    const savedDesignatedSupply = await DesignatedSupplyData.save();

    res.status(201).json({
      success: true,
      savedDesignatedSupply,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const allDesignatedSupplies = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const designatedSupplies = await DesignatedSupply.find(keyword);
  res.status(200).json(designatedSupplies.reverse());
});

const updateDesignatedSupply = asyncHandler(async (req, res) => {
  const { id, itemName, quantity, department, receiver, dateDesignated } =
    req.body;
  const updatedCommonSupply = await DesignatedSupply.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        itemName,
        quantity,
        department,
        receiver,
        dateDesignated,
      },
    }
  );

  if (!updatedCommonSupply) {
    res.status(404);
    throw new Error("Designated Supply Not Found");
  } else {
    res.json(updatedCommonSupply);
  }
});

module.exports = {
  createDesignatedSupply,
  allDesignatedSupplies,
  updateDesignatedSupply,
};
