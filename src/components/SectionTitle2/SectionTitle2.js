import React from "react";
import board from "../../images/COMMODITIES.png";

const SectionTitle2 = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="wpo-section-title-s2">
          <h2>{props.Title}</h2>
          <img src={board}></img>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle2;
