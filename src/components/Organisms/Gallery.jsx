import React from "react";
import data from "../../data/data.json";
import Card from "../Molecules/Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Gallery;