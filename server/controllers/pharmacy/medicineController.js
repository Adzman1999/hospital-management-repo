const asyncHandler = require("express-async-handler");
const Medicine = require("../../models/pharmacy/MedicineModel");

const createMedicine = asyncHandler(async (req, res) => {
  try {
    const {
      medicineNAme,
      brand,
      manufacturer,
      expiration,
      dateOrdered,
      dateArrived,
      dosage,
      type,
      quantity,
      price,
      description,
    } = req.body;
    const medicineData = new Medicine({
      medicineNAme,
      brand,
      manufacturer,
      expiration,
      dateOrdered,
      dateArrived,
      dosage,
      type,
      quantity,
      price,
      description,
    });

    const savedMedicine = await medicineData.save();

    res.status(201).json({
      success: true,
      savedMedicine,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const allMedicines = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const medicines = await Medicine.find(keyword);
  res.status(200).json(medicines.reverse());
});

const updateMedicine = asyncHandler(async (req, res) => {
  const {
    id,
    medicineNAme,
    brand,
    manufacturer,
    expiration,
    dateOrdered,
    dateArrived,
    dosage,
    type,
    quantity,
    price,
    description,
  } = req.body;
  console.log(id);

  const updatedMedicine = await Medicine.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        medicineNAme,
        brand,
        manufacturer,
        expiration,
        dateOrdered,
        dateArrived,
        dosage,
        type,
        quantity,
        price,
        description,
      },
    }
  );

  if (!updatedMedicine) {
    res.status(404);
    throw new Error("Patient Test Not Found");
  } else {
    res.json(updatedMedicine);
  }
});

const updateStock = asyncHandler(async (req, res) => {
  const { id, quantity } = req.body;

  const updatedStock = await Medicine.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        quantity,
      },
    }
  );

  if (!updatedStock) {
    res.status(404);
    throw new Error("Stock Not Found");
  } else {
    res.json(updatedStock);
  }
});


const searchMedicine = asyncHandler(async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { medicineNAme: { $regex: req.query.search, $options: "i" } },
            { brand: { $regex: req.query.search, $options: "i" } },
            { expiration: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const name = await Medicine.find(keyword);
    res.send(name);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = { createMedicine, allMedicines, updateMedicine, updateStock, searchMedicine };
