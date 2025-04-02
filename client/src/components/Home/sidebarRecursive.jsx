import React, { useState } from "react";
import { FaFolder, FaFile, FaPlus } from "react-icons/fa";

const FileHierarchy = ({ tree }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (path) => {
    setExpanded((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const buildTree = (fullPath) => {
    const parts = fullPath.split("/");
    let node = {};
    let current = node;

    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = index === parts.length - 1 ? "file" : {};
      }
      current = current[part];
    });

    return node;
  };

  const renderTree = (node, path = "") => {
    return Object.entries(node).map(([key, value]) => {
      const currentPath = path ? `${path}/${key}` : key;
      const isFile = value === "file";

      return (
        <li key={currentPath} style={{ paddingLeft: "10px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!isFile ? (
              <>
                {expanded[currentPath] ? (
                  <FaFolder
                    onClick={() => toggleExpand(currentPath)}
                    style={{ marginRight: 5, cursor: "pointer" }}
                  />
                ) : (
                  <FaFolder
                    onClick={() => toggleExpand(currentPath)}
                    style={{ marginRight: 5, cursor: "pointer" }}
                  />
                )}

                {key}

                <FaPlus style={{ marginLeft: 15 }} />
              </>
            ) : (
              <>
                <FaFile style={{ marginRight: 8 }} />
                {key}
                <FaPlus style={{ marginRight: 5 }} />
              </>
            )}
          </div>

          {!isFile && expanded[currentPath] && (
            <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
              {renderTree(value, currentPath)}
            </ul>
          )}
        </li>
      );
    });
  };

  const nestedStructure = buildTree(tree.fullPath);

  return (
    <ul style={{ listStyleType: "none" }}>{renderTree(nestedStructure)}</ul>
  );
};

export default FileHierarchy;
