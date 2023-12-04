import React from "react";
import HomeTitle from "../../atoms/HomeTitle";
import { imageData } from "../../pages/AllArrays/Arrays";
const NewArrival = () => {
  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="New Arrival" />

      <div className=" grid place-items-center ">
        <div className=" flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 ">
          {imageData.map((item, index) => {
            return (
              <div className="w-72 max-[1523px]:w-60 h-96 " key={index}>
                <div className=" w-72 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />
                </div>
                <div className=" relative h-max p-2 flex justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
