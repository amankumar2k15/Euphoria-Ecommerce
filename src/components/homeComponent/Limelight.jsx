import React from "react";
import Frame from "../../assets/multipleImg/Frame.svg";
import HomeTitle from "../../atoms/HomeTitle";
import { imagesLimelight } from "../../pages/AllArrays/Arrays";
const Limelight = () => {
  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="In The Limelight" />

      <div className=" grid place-items-center  ">
        <div className=" flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 ">
          {imagesLimelight.map((item, index) => {
            return (
              <div
                className="w-72 max-[1523px]:w-60 h-96 relative "
                key={index}
              >
                <img
                  src={Frame}
                  className="w-10 h-10 absolute right-3 top-5 "
                />
                <div className=" w-72 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />
                </div>
                <div className=" relative h-max p-2 flex justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.productName}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Limelight;
