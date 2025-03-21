const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");

const folderRoutes = require("./routes/folderRoutes");
const fileRoutes = require("./routes/fileRoutes");

env.config();

const PORT = process.env.PORT || 3000;
const app = express();

// MongoDB connection process.env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/folders", folderRoutes);
app.use("/files", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
