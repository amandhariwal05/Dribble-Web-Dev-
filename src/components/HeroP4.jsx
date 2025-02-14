import React from 'react'
import './HeroP4.css'

const HeroP4 = ({data}) => {
  return (
    <div id="P4-div">
      <p>Trending searches </p>
      {data.map((item, index) => (
        <a key={index} href="" id="a-box">
          {item}
        </a>
      ))}
    </div>
  );
}

export default HeroP4
