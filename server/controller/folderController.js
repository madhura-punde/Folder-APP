const Folder = require("../models/folderModel");
const File = require("../models/fileModel");

exports.createFolderSubFolder = async (req, res) => {
  const { name, parentId } = req.body; // parentId is the ID of the parent folder (e.g., Downloads)

  try {
    // If parentId is provided, it's a subfolder. Otherwise, it's a top-level folder.
    let fullPath = name;

    if (parentId) {
      fullPath = `${parentId}/${name}`;
    }

    const newFolder = new Folder({ name, parentId, fullPath });
    await newFolder.save();

    res
      .status(201)
      .send({ message: "Folder created successfully", folder: newFolder });
  } catch (err) {
    res.status(500).send("Error creating folder");
  }
};

// Fetch Folder Structure (files and folders)
exports.getFolderStructure = async (req, res) => {
  const folderId = req.params.folderId || null;

  try {
    const files = await File.find({
      $or: [
        { fullPath: new RegExp(folderId, "i") },
        { parentId: new RegExp(folderId, "i") },
      ],
    }).exec();
    const folders = await Folder.find({
      $or: [
        { fullPath: new RegExp(folderId, "i") },
        { name: new RegExp(folderId, "i") },
        { parentId: new RegExp(folderId, "i") },
      ],
    }).exec();

    res.status(200).json({
      message: `fetched results for:${folderId} `,
      folders,
      files,
      foldersCount: folders.length,
      filesCount: files.length,
    });
  } catch (err) {
    res.status(500).send("Error fetching folder/file structure");
  }
};
