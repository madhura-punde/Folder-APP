const express = require("express");
const router = express.Router();
const folderController = require("../controller/folderController");

// Create folder
router.post("/create", folderController.createFolderSubFolder);

// Fetch folder structure
router.get("/structure/:folderId", folderController.getFolderStructure);

module.exports = router;
