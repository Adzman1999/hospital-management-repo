const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/GenerateToken");

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const users = await User.find(keyword);
  res.send(users);
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { allUsers, authUser };
