import React from "react";
import StyleAside from "../../../atoms/StyleAside";
import { color } from "../../../pages/AllArrays/Arrays";
const Colors = () => {
  return (
    <>
      <div className="p-4 border ">
        <StyleAside text="Colors" />
        <div className="border w-full flex-wrap flex gap-x-2 p-4 gap-y-10">
          {color.map((item, index) => (
            <div className="text-center" key={index}>
              <div
                className="border w-1 rounded-lg  p-4 "
                key={index}
                style={{ backgroundColor: item.color, color: '#fff' }}
              >
              </div>
              <p className="text-[#8A8989] ">{item.colorName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Colors;
