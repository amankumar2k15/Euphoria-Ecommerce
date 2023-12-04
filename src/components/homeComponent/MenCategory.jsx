import React from "react";

import HomeTitle from "../../atoms/HomeTitle";
import { imageMen } from "../../pages/AllArrays/Arrays";
const MenCategory = () => {



  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="Categories For Men" />

      <div className=" grid place-items-center  ">
        <div className="  flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 ">
          {imageMen.map((item, index) => {
            return (
              <div key={index} className="w-72 max-[1523px]:w-60 h-96 " >
                <div className=" w-72 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />
                </div>
                <div className=" relative h-max p-2 flex justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.productName}</p>
                  </div>
                  <div>
                    <p className="font-semibold"><i className="fa-solid fa-arrow-right"></i></p>
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

export default MenCategory;
