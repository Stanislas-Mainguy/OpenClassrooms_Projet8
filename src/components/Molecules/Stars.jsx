import React from "react";
import Star from "../Atoms/Star";

const Stars = ({ appartement }) => {
    const rating = parseInt(appartement.rating);
    
    return (
        <div className="host-rating">
            <Star className={rating >=1 ? 'active' : ''} />
            <Star className={rating >=2 ? 'active' : ''}/>
            <Star className={rating >=3 ? 'active' : ''}/>
            <Star className={rating >=4 ? 'active' : ''}/>
            <Star className={rating >=5 ? 'active' : ''}/>
        </div>
    );
};

export default Stars;