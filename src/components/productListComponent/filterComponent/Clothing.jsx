import React from "react";
import rightArrow from "../../../assets/multipleImg/rightArrow.svg";

const Clothing = () => {
  let data = [
    { cloth: "Tops" },
    { cloth: "printed T-shirts" },
    { cloth: "Plain T-shirts" },
    { cloth: "Kurti", },
    { cloth: "Boxers" },
    { cloth: "Full sleeve T-shirts" },
    { cloth: "Joggers" },
    { cloth: "Pyjamas" },
    { cloth: "Jeans" },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div className="p-4 border" key={index}>
          <div className="flex justify-between">
            <span className="text-[#8A8989] text-base font-semibold not-italic">
              {item.cloth}
            </span>
            <img className="hover:text-purpleColor" src={rightArrow} alt="Right Arrow" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Clothing;
