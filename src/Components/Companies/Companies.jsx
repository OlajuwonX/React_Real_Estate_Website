import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerwidth flexCenter companies-container">
        <img src="./realty.png" alt="realty" />
        <img src="./tower.png" alt="tower" />
        <img src="./equinix.png" alt="equinix" />
        <img src="./prologis.png" alt="prologis" />
      </div>
    </div>
  );
};

export default Companies;
