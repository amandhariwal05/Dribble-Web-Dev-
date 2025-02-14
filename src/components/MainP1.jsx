import React from "react";
import { MdKeyboardArrowDown, MdFilterList } from "react-icons/md";
import "./MainP1.css";

const MainP1 = () => {
  return (
    <div className="nav-container">
      <div className="nav-item">
        <button id="popular-button">
          Popular <MdKeyboardArrowDown />
        </button>
      </div>
      <div id="multi-item-div">
        <div className="nav-item">Discover</div>
        <div className="nav-item">Animation</div>
        <div className="nav-item">Branding</div>
        <div className="nav-item">Illustration</div>
        <div className="nav-item">Mobile</div>
        <div className="nav-item">Print</div>
        <div className="nav-item">Product Design</div>
      </div>
      <button className="filter-btn">
        <MdFilterList />
        Filters
      </button>
    </div>
  );
};

export default MainP1;
