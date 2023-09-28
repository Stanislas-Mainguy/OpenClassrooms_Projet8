import React from "react";
import Filter from "../Atoms/Filter";


const Banner = ({ datas }) => {
  return (
    <div className="banner">
      <Filter />
      <img src={datas.src} alt={datas.alt} />
      <p className="banner-text">{datas.slogan}</p>
    </div>
  )
}

export default Banner;