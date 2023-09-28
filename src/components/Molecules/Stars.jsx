import React from "react";
import Star from "../Atoms/Star";

const Stars = ({ apartment }) => {
    const rating = parseInt(apartment.rating);
    
    return (
      <div className="host-block-rating">
        <Star active={rating >= 1} />
        <Star active={rating >= 2} />
        <Star active={rating >= 3} />
        <Star active={rating >= 4} />
        <Star active={rating >= 5} />
      </div>
    )
};

export default Stars;