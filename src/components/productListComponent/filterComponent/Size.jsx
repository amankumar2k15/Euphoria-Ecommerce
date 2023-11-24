import React from "react";
import StyleAside from "../../../atoms/StyleAside";

const Size = () => {
  let Size = [
    { Sizes: "XXS", },
    { Sizes: "XL", },
    { Sizes: "XS", },
    { Sizes: "S", },
    { Sizes: " M", },
    { Sizes: "L", },
    { Sizes: "XXL", },
    { Sizes: "3XL", },
    { Sizes: "4XL", },
  ];
  return (
    <div>
      <div className="p-4 border ">
        <StyleAside text="Size" />
        <div className="border w-full flex-wrap flex gap-x-2 p-4 gap-y-10">
          {Size.map((item, index) => (
            <div className="border w-16 text-center text-[#8A8989] text-base font-semibold not-italic " key={index}>
              {item.Sizes}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Size;
