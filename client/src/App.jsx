import React from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Home/Sidebar";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Home />
      </div>
    </div>
  );
}

export default App;
