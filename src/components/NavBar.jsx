import React, { useState } from "react";
import Dribble from "../assets/Dribble.png";
import { MdOutlineFilterList } from "react-icons/md";
import "./NavBar.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  const [liststate, setListState] = useState(false);
  const [navHeight, setNavHeight] = useState("5.75rem");

  const handlelistclick = (event) => {
    event.stopPropagation();
    setListState((prevState) => !prevState);
    setNavHeight(liststate ? "5.75rem" : "280px");
  };

  return (
    <div id="main-nav-cont" style={{ height: navHeight }}>
      <div id="left-nav-cont">
        <MdOutlineFilterList id="list-show-button" onClick={handlelistclick} />
        <div id="drib-img-cont-head">
          <a href="">
            <img id="drib-img" src={Dribble} alt="" />
          </a>
        </div>
        <div id="left-links-cont">
          <a href="">
            Explore
            <RiArrowDropDownLine className="dropdown-btn" />
          </a>
          <a href="">
            Hire a Designer
            <RiArrowDropDownLine className="dropdown-btn" />
          </a>
          <a href="">Find Jobs</a>
          <a href="">Blog</a>
        </div>
      </div>

      {liststate && (
        <div
          className="ham-nav"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div id="left-links-cont-mob">
            <a href="">
              Explore
              <RiArrowDropDownLine className="dropdown-btn" />
            </a>
            <a href="">
              Hire a Designer
              <RiArrowDropDownLine className="dropdown-btn" />
            </a>
            <a href="">Find Jobs</a>
            <a href="">Blog</a>
          </div>
        </div>
      )}

      <div id="right-nav-cont">
        <div id="signup-cont">
          <a href="">Sign up</a>
        </div>
        <div id="login-cont">
          <a href="">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
