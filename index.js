const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


// Route Imports
const formRoute = require("./routes/formRoute");
const authRoute = require("./routes/authRoute");
const adminRoute = require("./routes/adminRoute");

dotenv.config();

const PORT = process.env.PORT || 3002;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoute);
app.use("/form", formRoute);
app.use("/admin", adminRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Terminate the app
  });

// Test Route
app.get("/giveme", async (req, res) => {
  res.send("You will show in Postman");
});

// Default Route for Undefined Endpoints
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
