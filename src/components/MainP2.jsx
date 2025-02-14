import React from "react";
import "./MainP2.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const MainP2 = ({ postimgadd, postname, likescount, heartcount }) => {
  const data = [1];
  return (
    <div id="main-head-div">
      {postname.map((item, index) => (
        <div key={index} id="map-div">
          <img id="img-div" src={postimgadd[index]} alt="" />
          <div id="img-cont">
            <a href="">{postname[index]}</a>
            <div id="like-div">
              <div className="indi-like-items">
                <div className="icons">
                  <FaRegHeart />
                </div>

                <p>{likescount[index]}</p>
              </div>
              <div className="indi-like-items">
                <div className="icons">
                  <FaEye />
                </div>

                <p>{heartcount[index]}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainP2;
