import React from "react";
import StyleAside from "../../../atoms/StyleAside";

const Colors = () => {
  let color = [
    { color: "#8434E1", colorName: "Purple", },
    { color: "#252525", colorName: "Black", },
    { color: "#F35528", colorName: "Red", },
    { color: "#F16F2B", colorName: "Orange", },
    { color: " #345EFF", colorName: "Navy", },
    { color: "#FFF", colorName: "White", },
    { color: "#D67E3B", colorName: "Broom", },
    { color: "#48BC4E", colorName: "Green", },
    { color: "#FDC761", colorName: "Yellow", },
    { color: "#E4E5E8", colorName: "Grey", },
    { color: "#E08D9D", colorName: "Pink", },
    { color: "#3FDEFF", colorName: "Blue", },
  ];

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
