const mongoose = require("mongoose");

const roomsModel = mongoose.Schema(
  {
    roomName: String,
    roomType: String,
    roomNumber: Number,
    roomPrice: Number,
  },
  { timestamps: true }
);

const Rooms = mongoose.model("room", roomsModel);

module.exports = Rooms;
