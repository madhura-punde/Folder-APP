import React, { useState } from "react";
import { Table, Button, Dropdown } from "react-bootstrap";
import { FaPlusSquare, FaFile, FaFilter } from "react-icons/fa";
import CreateFolderModal from "../CreateFolder/CreateFolderModal";
import UploadDocumentModal from "../UploadDocument/UploadDocument";
import FilterModal from "../Filter/FilterModal";
import { createFolderAPI } from "../CreateFolder/CreateFolderService";
import { fileUploadService } from "./HomeService";
import DocumentTable from "./DocumentTable";
import { useSelector } from "react-redux";

const documents = [
  {
    name: "Mission_Logs",
    description: "This file includes logs...",
    createdAt: "17/03/2025",
    updatedAt: "17/03/2025",
  },
  {
    name: "Satellite_Data",
    description: "Satellite records...",
    createdAt: "17/03/2025",
    updatedAt: "17/03/2025",
  },
];

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showUploadDocument, setShowUploadDocument] = useState(false);
  const [showFilterSection, setShowFilterSection] = useState(false);
  let documentsResponse = useSelector((state) => state.files.documentsResponse);

  let handleAdd = () => {
    console.log("Add button clicked", showDropdown);
    setShowDropdown((prev) => !prev);
  };

  let handleCreateFolder = () => {
    setShowDropdown(false);
    setShowCreateFolder((prev) => !prev);
  };
  let handleUploadDocument = () => {
    setShowDropdown(false);
    setShowUploadDocument((prev) => !prev);
  };

  let handleFilterSection = () => {
    setShowFilterSection((prev) => !prev);
    setShowDropdown(false);
  };

  const handleCreateFolderSubmit = async (folderName, description) => {
    let payload = {
      name: folderName,
      parentId: folderName,
      // description: description,
    };
    let response = await createFolderAPI(payload);
    console.log("Response from API:", response);
    if (response.status === 200) {
      // console.log(response.data.message);
      window.alert(response.data.message);
    } else {
      console.log(response.data.error);
    }
  };

  const handleUploadFile = async (file) => {
    if (file.name) {
      let res = await fileUploadService(file);
      if (res.status === 200) {
        window.alert(res.data.message);
      } else {
        window.alert(res.data.error);
      }
    }
  };

  const handleApplyFilters = (filters) => {
    console.log("Applying filters in Home:", filters);
    setShowFilterSection(false);
    // TODO: Implement your filtering logic here based on 'filters'
    // Example (basic, case-insensitive):
    const newFilteredDocuments = documents.filter((doc) => {
      const nameMatch =
        !filters.name ||
        doc.name.toLowerCase().includes(filters.name.toLowerCase());
      const descriptionMatch =
        !filters.description ||
        doc.description
          .toLowerCase()
          .includes(filters.description.toLowerCase());
      const dateMatch = !filters.date || doc.createdAt === filters.date; // Adjust date comparison as needed
      return nameMatch && descriptionMatch && dateMatch;
    });
    setFilteredDocuments(newFilteredDocuments);
  };

  const handleClearFilters = () => {
    console.log("Clearing filters in Home");
    setFilteredDocuments([...documents]); // Reset to the original list
    // TODO: Implement any other logic to clear filters
  };
  return (
    <div className="card p-3">
      <div className="d-flex justify-content-between">
        <h5>Folders & Documents</h5>
        <div>
          {/* <Button variant="primary" className="me-2"> */}
          <FaFilter size={30} onClick={handleFilterSection} />
          {/* </Button> */}

          {/* <Button variant="success"> */}
          <FaPlusSquare size={30} onClick={handleAdd} />
          {/* </Button> */}
          {showDropdown && (
            <div
              className="position-absolute bg-white shadow rounded p-2"
              style={{ right: 0, zIndex: 1000 }}
            >
              <Dropdown.Item onClick={handleCreateFolder}>
                📁 Create Folder
              </Dropdown.Item>
              <Dropdown.Item onClick={handleUploadDocument}>
                📂 Upload Document
              </Dropdown.Item>
            </div>
          )}
        </div>
      </div>

      {/* <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>
                <FaFile /> {doc.name}
              </td>
              <td>{doc.description}</td>
              <td>{doc.createdAt}</td>
              <td>{doc.updatedAt}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">⋮</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                    <Dropdown.Item>Create Folder</Dropdown.Item>
                    <Dropdown.Item>Upload Document</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
      <DocumentTable documents={documentsResponse} />
      {/* Create Folder Modal */}
      <CreateFolderModal
        show={showCreateFolder}
        onClose={() => setShowCreateFolder(false)}
        onCreate={handleCreateFolderSubmit}
      />

      {/* Upload Document Modal */}
      <UploadDocumentModal
        show={showUploadDocument}
        onClose={() => setShowUploadDocument(false)}
        onUpload={handleUploadFile}
      />
      {/* Filter Section */}
      <FilterModal
        show={showFilterSection}
        onClose={() => setShowFilterSection(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
      />
    </div>
  );
};

export default Home;
