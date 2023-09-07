import React from 'react';
import aboutData from '../../data/about.json';

const CollapseDescription = () => {
  const description = aboutData.description;
  return <p>{description}</p>;
};

export default CollapseDescription;