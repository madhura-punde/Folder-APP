import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";

const UploadDocumentModal = ({ show, onClose, onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }
    onUpload(file);
    setFile(null);
    onClose(); // Close modal after submitting
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Upload Document</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Browse Document</Form.Label>
            <div className="border rounded p-3 text-center">
              <input
                type="file"
                className="d-none"
                id="fileInput"
                onChange={handleFileChange}
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <FaUpload size={40} />
                <p className="mt-2">
                  {file ? file.name : "Click to upload a file"}
                </p>
              </label>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadDocumentModal;
