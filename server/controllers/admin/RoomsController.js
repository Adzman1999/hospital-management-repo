const asyncHandler = require("express-async-handler");
const Room = require("../../models/admin/RoomsModel");

const createRoom = asyncHandler(async (req, res) => {
  try {
    const { roomName, roomType, roomNumber, roomPrice } = req.body;
    const roomData = new Room({
      roomName,
      roomType,
      roomNumber,
      roomPrice,
    });

    const savedRoom = await roomData.save();

    res.status(201).json({
      success: true,
      savedRoom,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const allRooms = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const rooms = await Room.find(keyword);
  res.status(200).json(rooms.reverse());
});

const updateRoom = asyncHandler(async (req, res) => {
  const { id, roomName, roomType, roomNumber, roomPrice } = req.body;
  const updatedRoom = await Room.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        roomName,
        roomType,
        roomNumber,
        roomPrice,
      },
    }
  );

  if (!updatedRoom) {
    res.status(404);
    throw new Error("Room Not Found");
  } else {
    res.json(updatedRoom);
  }
});

module.exports = { createRoom, allRooms, updateRoom };
