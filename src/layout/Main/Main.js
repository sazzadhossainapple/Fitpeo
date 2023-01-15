import React from "react";
import Home from "../../pages/Home/Home";
import SideBar from "../../pages/SideBar/SideBar";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="side-bars text-white p-3">
        <SideBar />
      </div>
      <div className="main-content">
        <Home />
      </div>
    </div>
  );
};

export default Main;
