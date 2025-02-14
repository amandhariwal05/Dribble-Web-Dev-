import React from "react";
import Dribble from "../assets/Dribble.png";
import "./NavBar.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div id="main-nav-cont">
      <div id="left-nav-cont">
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

      <div id="right-nav-cont">
        <a href="">Sign up</a>
        <div id="login-cont">
          <a href="">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
