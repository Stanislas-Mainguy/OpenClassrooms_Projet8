import React, { useState } from 'react';
import CollapseArrow from './CollapseArrow';
import CollapseTitle from './CollapseTitle';
import CollapseDescription from './CollapseDescription';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse}>
        <CollapseTitle title={title} />
        <CollapseArrow />
      </div>
      {isOpen && <CollapseDescription description={description} />}
    </div>
  );
};

export default Collapse;