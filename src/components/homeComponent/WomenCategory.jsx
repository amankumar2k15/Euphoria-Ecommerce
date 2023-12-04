import React from "react";
// import img1 from "../../assets/multipleImg/girl1.png";
// import img2 from "../../assets/multipleImg/girl2.png";
// import img3 from "../../assets/multipleImg/girl3.png";
// import img4 from "../../assets/multipleImg/girl4.png";
import HomeTitle from "../../atoms/HomeTitle";
import { imageWomen } from "../../pages/AllArrays/Arrays";
const WomenCategory = () => {


  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="Categories For Women" />

      <div className=" grid place-items-center  " >
        <div className=" flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 " >
          {imageWomen.map((item, index) => {
            return (

              <div className="w-72 max-[1523px]:w-60 h-96 " key={index} >
                <div className=" w-72 max-[1523px]:w-60 h-max"><img src={item.src} className="h-72 rounded w-full" /></div>
                <div className=" relative h-max p-2 flex justify-between">
                  <div><p className="font-semibold">{item.name}</p>
                    <p>{item.productName}</p></div>
                  <div><p className="font-semibold">{item.price}</p></div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WomenCategory;
