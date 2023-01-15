import React from "react";
import "./sideBar.css";
import { AiOutlineBars } from "react-icons/ai";

const SideBar = () => {
  return (
    <section>
      <div className="fs-6 d-flex tex">
        <h2>Fitpeo</h2>
        <AiOutlineBars />
      </div>
    </section>
  );
};

export default SideBar;
