import React, { useEffect, useState } from "react";
import { getFolderService } from "./HomeService";
import { useDispatch, useSelector } from "react-redux";
import {
  File_Fetch_FAILURE,
  FILE_Fetch_SUCCEEDED,
  isLoading,
} from "./homeSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FileHierarchy from "./sidebarRecursive";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();
  const documentsResponse = useSelector(
    (state) => state.files.documentsResponse
  );
  const loading = useSelector((state) => state.files.loading);

  const handleonLoad = async () => {
    dispatch(isLoading());
    let res = await getFolderService({ page: 1, perPage: 5 });
    if (res.status === 200) {
      console.log("res.data.files", res.data.files);
      dispatch(FILE_Fetch_SUCCEEDED(res.data.files));
    } else {
      dispatch(File_Fetch_FAILURE(res.error));
    }
  };

  useEffect(() => {
    handleonLoad();
  }, []);

  return (
    <div
      className={`bg-dark text-white p-3 d-flex flex-column ${
        isCollapsed ? "collapsed-sidebar" : ""
      }`}
      style={{
        width: isCollapsed ? "50px" : "250px",
        height: "100vh",
        transition: "width 0.3s",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        {!isCollapsed && <h5>Folders & Documents</h5>}
        <button
          className="btn btn-sm btn-light"
          onClick={() => setIsCollapsed((prev) => !prev)}
          style={{ marginLeft: "auto" }}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {!isCollapsed && (
        <div>
          {documentsResponse.map((doc, index) => (
            <FileHierarchy tree={doc} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
