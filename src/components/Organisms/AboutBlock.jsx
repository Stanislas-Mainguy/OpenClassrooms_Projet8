import React from 'react';
import Collapse from '../Molecules/Collapse';

const AboutBlock = ({ items }) => {
  return (
    <div className="about-block">
      {items.map((item, index) => (
        <Collapse
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default AboutBlock;