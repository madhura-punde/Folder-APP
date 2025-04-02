import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const FilterModal = ({ show, onClose, onApply, onClear }) => {
  const [filterName, setFilterName] = useState("");
  const [filterDescription, setFilterDescription] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const handleApply = () => {
    onApply({
      name: filterName,
      description: filterDescription,
      date: filterDate,
    });
  };

  const handleClear = () => {
    setFilterName("");
    setFilterDescription("");
    setFilterDate("");
    onClear();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Filters</Modal.Title>
        <Button variant="link" onClick={handleClear} className="me-2">
          Clear
        </Button>
        <Button variant="close" onClick={onClose}>
          <FaTimes />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="filterName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Folder name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="filterDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={filterDescription}
              onChange={(e) => setFilterDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="filterDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="DD-MM-YYYY"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            {/* <Form.Text className="text-muted">DD-MM-YYYY</Form.Text> */}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
