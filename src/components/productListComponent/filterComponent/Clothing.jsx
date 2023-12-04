import React from "react";
import rightArrow from "../../../assets/multipleImg/rightArrow.svg";
import { data } from "../../../pages/AllArrays/Arrays";
const Clothing = () => {
  return (
    <>
      {data.map((item, index) => (
        <div className="p-4 border" key={index}>
          <div className="flex justify-between">
            <span className="text-[#8A8989] text-base font-semibold not-italic">
              {item}
            </span>
            <img className="hover:text-purpleColor" src={rightArrow} alt="Right Arrow" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Clothing;
