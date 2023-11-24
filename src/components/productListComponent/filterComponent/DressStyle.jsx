import React from "react";
import rightArrow from "../../../assets/multipleImg/rightArrow.svg";
import StyleAside from "../../../atoms/StyleAside";

const DressStyle = () => {
  let dressStyle = [
    { cloth: "Tops", },
    { cloth: "printed T-shirts", },
    { cloth: "Plain T-shirts", },
    { cloth: "Kurti", },
    { cloth: "Boxers", },
    { cloth: "Full sleeve T-shirts", },
    { cloth: "Joggers", },
    { cloth: "Pyjamas", },
    { cloth: "Jeans" },
  ];
  return (
    <div>
      <div className="p-4 border">
        <StyleAside text="Dress Style" />
      </div>
      {dressStyle.map((item, index) => (
        <div className="p-4 border" key={index}>
          <div className="flex justify-between">
            <span className="text-[#8A8989] text-base font-semibold not-italic">
              {item.cloth}
            </span>
            <img src={rightArrow} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DressStyle;
