import React from "react";
import "./Footer.css";
import Dribble from "../assets/Dribble.png";

const Footer = () => {
  return (
    <>
      <div id="sup-div">
        <div id="main-footer-div">
          <div id="drib-img-cont-footer">
            <a href="">
              <img id="drib-img" src={Dribble} alt="" />
            </a>
          </div>
          <div id="multi-item-div-footer">
            <div className="nav-item">For designers</div>
            <div className="nav-item">Hire talent</div>
            <div className="nav-item">Inspiration</div>
            <div className="nav-item">Advertising</div>
            <div className="nav-item">Blog</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Careers</div>
            <div className="nav-item">Support</div>
          </div>

          <div id="icons-div">
            <img src="facebook.svg" alt="" />
            <img src="twitter.svg" alt="" />
            <img src="instagram.svg" alt="" />
            <img src="pinterest.svg" alt="" />
          </div>
        </div>

        <div id="down-div">
          <div id="left-div">
            <p>© 2025 Dribbble</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
          <div id="right-div">
            <p>Jobs</p>
            <p>Designers</p>
            <p>Freelancers</p>
            <p>Tags</p>
            <p>Places</p>
            <p>Resources</p>
          </div>
        </div>
      </div>
      <div id="und-dev-div">
        <p>**Under Development (New Updates coming soon)</p>
      </div>
    </>
  );
};

export default Footer;
