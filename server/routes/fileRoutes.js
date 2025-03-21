const express = require("express");
const router = express.Router();
const fileController = require("../controller/filecontroller");
const { uploadFile, upload } = require("../controller/fileUploadController");

router.post("/upload", upload.single("file"), uploadFile);

// Paginated files
router.get("/files", fileController.getPaginatedFiles);

// Search files
router.get("/search", fileController.searchFiles);

module.exports = router;
