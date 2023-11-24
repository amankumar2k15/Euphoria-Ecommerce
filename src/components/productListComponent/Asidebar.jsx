import React from "react";
import filtericon from "../../assets/multipleImg/filter.svg";
import PriceCloth from "./filterComponent/PriceCloth";
import Colors from "./filterComponent/Colors";
import Size from "./filterComponent/Size";
import DressStyle from "./filterComponent/DressStyle";
import Clothing from "./filterComponent/Clothing";
import StyleAside from "../../atoms/StyleAside";

const Asidebar = () => {

  return (
    <>
      <div className="w-1/5">
        <div className="flex justify-between p-4 border w-full">
          <StyleAside text="Filter" />
          <p>
            <img src={filtericon} />
          </p>
        </div>
        <Clothing />
        <PriceCloth />
        <Colors />
        <Size />
        <DressStyle />
      </div>
    </>
  );
};

export default Asidebar;
