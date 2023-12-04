import React from "react";
import rightArrow from "../../../assets/multipleImg/rightArrow.svg";
import StyleAside from "../../../atoms/StyleAside";
import { dressStyle } from "../../../pages/AllArrays/Arrays";
const DressStyle = () => {
  return (
    <div>
      <div className="p-4 border">
        <StyleAside text="Dress Style" />
      </div>
      {dressStyle.map((item, index) => (
        <div className="p-4 border" key={index}>
          <div className="flex justify-between">
            <span className="text-[#8A8989] text-base font-semibold not-italic">
              {item}
            </span>
            <img src={rightArrow} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DressStyle;
