import React from "react";
import StyleAside from "../../../atoms/StyleAside";
import { sizing } from "../../../pages/AllArrays/Arrays";
const Size = () => {
  return (
    <div>
      <div className="p-4 border ">
        <StyleAside text="Size" />
        <div className="border w-full flex-wrap flex gap-x-2 p-4 gap-y-10">
          {sizing.map((item, index) => (
            <div
              className="border w-16 text-center text-[#8A8989] text-base font-semibold not-italic "
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Size;
