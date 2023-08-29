const express = require("express");
const dotenv = require("dotenv");
const User = require("./routes/UserRoute");
const { notFound, errorHandler } = require("./middleware/ErrorMiddleware");
const connectDB = require("./config/Database");
const cors = require("cors");
const path = require("path");
const Patients = require("./routes/nurse/PatientsRoute");
const PatientTest = require("./routes/laboratory/PatientTestRoute");
const Medicine = require("./routes/pharmacy/medicineRoute");
const Prescription = require("./routes/pharmacy/PrescriptionRoute");
const XrayResult = require("./routes/radiology/XrayResultRoute");
const Role = require("./routes/admin/RoleRoute");
const Room = require("./routes/admin/RoomsRoute");
const CommonSupply = require("./routes/admin/CommonSupplyRoute");
const DesignatedSupply = require("./routes/admin/DesignatedSupplyRoute");

const app = express();
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(cors());

// Navigate On Env
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: ".env",
  });
}

// Imported Routes

app.use("/api/user", User);

//NURSE ROUTES
app.use("/api/nurse/patient", Patients);

//LABORATORY ROUTES
app.use("/api/laboratory/patient-test", PatientTest);

//PHARMACY ROUTES
app.use("/api/pharmacy/medicine", Medicine);
app.use("/api/pharmacy/prescription", Prescription);

//RADIOLOGY ROUTE
app.use("/api/radiology/xray-result", XrayResult);

//ADMIN ROUTE
app.use("/api/admin/role", Role);
app.use("/api/admin/room", Room);
app.use("/api/admin/common-supply", CommonSupply);
app.use("/api/admin/designated-supply", DesignatedSupply);

// Deployment
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// For API Error Handling

app.use(notFound);
app.use(errorHandler);

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

// Connect to Database

connectDB();

// Connect to Localhost Server
const server = app.listen(
  process.env.PORT,
  console.log(`Server runs on port ${process.env.PORT}`)
);

// For Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
