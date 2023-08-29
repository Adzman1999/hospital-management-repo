const mongoose = require("mongoose");
const UserRole = require("../auto/RoleUser");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(
          `mongodb is connected with server: ${data.connection.host}`
        );
        UserRole();
      });
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
