const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: false },
  folderId: {
    type: String,
    ref: "Folder",
  },
  size: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  fullPath: { type: String, default: "" },
});

module.exports = mongoose.model("File", fileSchema);
