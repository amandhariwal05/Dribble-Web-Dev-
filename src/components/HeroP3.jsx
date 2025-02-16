import React from "react";
import "./HeroP3.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

const HeroP3 = () => {
  return (
    <div id="main-search-div">
      <div>
        <input id="inp-field" type="text" placeholder="What are you looking for?"/>
      </div>
      <div id="shots-div">
        <button href="">
          Shots
          <RiArrowDropDownLine className="dropdown-btn" />
        </button>
      </div>
      <div id="search-box-div">
        <IoSearchSharp />
      </div>
    </div>
  );
};

export default HeroP3;
