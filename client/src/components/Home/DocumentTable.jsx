import React, { useState } from "react";
import {
  FaFolder,
  FaFile,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

const buildHierarchy = (files) => {
  const root = {};

  files.forEach((file) => {
    const parts = file.fullPath.split("/"); // Split by folder structure
    let currentLevel = root;

    parts.forEach((part, index) => {
      if (!currentLevel[part]) {
        currentLevel[part] = {
          name: part,
          children: [],
          isFolder: index !== parts.length - 1, // Mark as folder if not last level
        };
      }

      if (index === parts.length - 1) {
        currentLevel[part].children.push(file); // Push file at the last level
      }

      currentLevel = currentLevel[part].children;
    });
  });

  return Object.values(root);
};

const DocumentTable = ({ documents }) => {
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleExpand = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const renderRows = (items, level = 0) => {
    return items.map((item) => {
      const isFolder = item.children;
      const isExpanded = expandedFolders[item.name];

      return (
        <React.Fragment key={item.name}>
          <tr>
            <td style={{ paddingLeft: `${level * 20}px` }}>
              {isFolder && (
                <span
                  onClick={() => toggleExpand(item.name)}
                  style={{ cursor: "pointer", marginRight: "8px" }}
                >
                  {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
              {isFolder ? (
                <FaFolder style={{ marginRight: 8 }} />
              ) : (
                <FaFile style={{ marginRight: 8 }} />
              )}
              {item.name}
            </td>
            <td>{!isFolder && item.size}</td>
            <td>
              {!isFolder && new Date(item.createdAt).toLocaleDateString()}
            </td>
            <td>
              {!isFolder && new Date(item.createdAt).toLocaleDateString()}
            </td>
            <td>
              {!isFolder && (
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">⋮</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </td>
          </tr>
          {isFolder && isExpanded && renderRows(item.children, level + 1)}
        </React.Fragment>
      );
    });
  };

  const nestedData = buildHierarchy(documents);

  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderRows(nestedData)}</tbody>
    </table>
  );
};

export default DocumentTable;
