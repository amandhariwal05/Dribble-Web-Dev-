import React from "react";
import "./MainSection.css";
import MainP1 from "./MainP1.jsx";
import MainP2 from "./MainP2.jsx";

const MainSection = () => {
  const postimgadd = [
    "/1.webp",
    "/2.webp",
    "/3.webp",
    "/4.webp",
    "/5.webp",
    "/6.webp",
    "/7.webp",
    "/8.webp",
    "/9.webp",
  ];

  const postname = [
    "UI/UX Designer",
    "Josh Warren",
    "Immo Unit",
    "Emote",
    "Nixtio",
    "Jetpacks",
    "Ethereum",
    "Tubik Arts",
    "Lain",
  ];
  const likescount = [322, 323, 324, 325, 326, 327, 328, 329, 330];
  const heartcount = [
    "1.2K",
    "1.3K",
    "1.4K",
    "1.5K",
    "1.6K",
    "1.7K",
    "1.8K",
    "1.9K",
    "2.0K",
  ];

  return (
    <div id="main-sec-div">
      <MainP1></MainP1>
      <MainP2
        postimgadd={postimgadd}
        postname={postname}
        likescount={likescount}
        heartcount={heartcount}
      ></MainP2>
    </div>
  );
};

export default MainSection;
