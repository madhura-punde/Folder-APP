const File = require("../models/fileModel");

// Paginated File Fetch
exports.getPaginatedFiles = async (req, res) => {
  const { page = 1, perPage = 5 } = req.query;
  // Parse page and perPage as integers
  const pageNumber = parseInt(page);
  const perPageNumber = parseInt(perPage);

  if (isNaN(pageNumber) || isNaN(perPageNumber)) {
    return res.status(400).send("Invalid page or perPage parameters");
  }

  try {
    const files = await File.find()
      .skip((pageNumber - 1) * perPageNumber)
      .limit(perPageNumber);
    const totalFiles = await File.countDocuments();
    res.status(200).json({ files, totalFiles });
  } catch (err) {
    res.status(500).send("Error fetching files");
  }
};

// Search Files by Folder and Name
exports.searchFiles = async (req, res) => {
  console.log("searchFiles", req.query);
  const { searchTerm = "", folderId } = req.query;
  if (!folderId) {
    return res.status(400).send("Folder ID is required");
  }
  try {
    const files = await File.find({
      name: { $regex: searchTerm, $options: "i" },
      folderId: { $regex: new RegExp("^" + folderId + "$", "i") },
    });
    // console.log(files);
    res.status(200).json({ files });
  } catch (err) {
    res.status(500).send("Error searching files");
  }
};
