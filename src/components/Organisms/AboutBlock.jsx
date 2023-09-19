import React from 'react';
import Collapse from '../Molecules/Collapse';

const AboutBlock = ({ items }) => {
  return (
    <div className="about-block">
      {items.map((item) => (
        <Collapse key={item.id} title={item.title} content={item.description} />
      ))}
    </div>
  );
};

export default AboutBlock;