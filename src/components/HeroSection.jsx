import React from "react";
import HeroP1 from "./HeroP1";
import HeroP2 from "./HeroP2";
import HeroP3 from "./HeroP3";
import HeroP4 from "./HeroP4";

const HeroSection = () => {
  const databxs = [
    "Landing page",
    "E-commerce",
    "Mobile app",
    "Logo design",
    "Dashboard",
    "Icons",
  ];

  return (
    <div>
      <HeroP1></HeroP1>
      <HeroP2></HeroP2>
      <HeroP3></HeroP3>
      <HeroP4 data={databxs}></HeroP4>
    </div>
  );
};

export default HeroSection;
