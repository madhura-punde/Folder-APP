import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateFolderModal = ({ show, onClose, onCreate }) => {
  const [folderName, setFolderName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!folderName.trim()) {
      alert("Folder name is required!");
      return;
    }
    onCreate(folderName, description);
    setFolderName("");
    setDescription("");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create Folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Folder Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Folder Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter folder description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateFolderModal;
