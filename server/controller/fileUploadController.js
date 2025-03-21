const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const dotenv = require("dotenv");
const File = require("../models/fileModel");

dotenv.config();
const s3 = new S3Client({
  region: process.env.AWS_REGION, // Ensure you have the correct region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Configure Multer to use S3 (with multer-s3)
const storage = multerS3({
  s3: s3,
  bucket: process.env.AWS_S3_BUCKET,
  acl: "private",
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    console.log(req.body);
    const folderPath = req.body.path || req.body.folderId || "root";
    const fileName = `${Date.now()}_${file.originalname}`;
    const filePath = `uploads/${folderPath}/${fileName}`;
    console.log("1. storage", { folderPath, fileName, filePath });
    cb(null, filePath); // Pass file path to S3
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage });

// Upload File Controller
let uploadFile = (req, res) => {
  const { folderId = null, path } = req.body;
  const file = req.file; // Uploaded file
  console.log("2. uploadFile", { folderId, path, file });
  if (!file) {
    return res.status(400).send("No file uploaded");
  }

  const newFile = new File({
    name: file.originalname,
    size: file.size,
    fullPath: file.location, // This will be the URL of the file in S3
    folderId,
  });
  console.log("3. newFile", newFile);

  newFile
    .save()
    .then(() => {
      res.status(200).json({
        message: "File uploaded successfully",
        // message: `File ${file.originalname} uploaded successfully to S3 at path: ${file.location}`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error saving file metadata", error: err });
    });
};

module.exports = { upload, uploadFile };
