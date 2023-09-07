import React, { useState } from 'react';
import CollapseArrow from '../Atoms/CollapseArrow';
import CollapseTitle from '../Atoms/CollapseTitle';
import CollapseDescription from '../Atoms/CollapseDescription';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <CollapseTitle title={title} />
      <div onClick={toggleCollapse}>
        <CollapseArrow />
      </div>
      {isOpen && <CollapseDescription description={description} />}
    </div>
  );
};

export default Collapse;