import React from "react";
import Star from "../Atoms/Star";

const Stars = ({ apartment }) => {
    const rating = parseInt(apartment.rating);
    
    return (
        <div className="host-block-rating">
            <Star className={rating >=1 ? 'active' : ''} />
            <Star className={rating >=2 ? 'active' : ''}/>
            <Star className={rating >=3 ? 'active' : ''}/>
            <Star className={rating >=4 ? 'active' : ''}/>
            <Star className={rating >=5 ? 'active' : ''}/>
        </div>
    );
};

export default Stars;