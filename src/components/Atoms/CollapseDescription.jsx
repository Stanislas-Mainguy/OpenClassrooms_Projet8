import React from "react";

const CollapseDescript = ({ data, liste }) => {
    if (liste) {
      return (
        <ul>
          {data.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p>{data}</p>
    };
};

export default CollapseDescript;