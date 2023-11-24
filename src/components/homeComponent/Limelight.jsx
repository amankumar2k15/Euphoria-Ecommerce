import React from "react";
import img1 from "../../assets/multipleImg/1.png";
import img2 from "../../assets/multipleImg/2.png";
import img3 from "../../assets/multipleImg/3.png";
import img4 from "../../assets/multipleImg/4.png";
import Frame from "../../assets/multipleImg/Frame.svg"
import HomeTitle from "../../atoms/HomeTitle";

const Limelight = () => {

  let images = [
    { src: img1, productName: "Jhanvi's Brand", name: "Black Sweatshirt with..", price: "$123.00", },
    { src: img2, productName: "AS's Brand", name: "Line Pattern Black H..", price: "$37.00", },
    { src: img3, productName: "MM's Brand", name: "Black Shorts..", price: "$37.00", },
    { src: img4, productName: "Nike's Brand", name: "Levender Hoodie with..", price: "$119.00", },
  ];

  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="In The Limelight" />

      <div className=" grid place-items-center  " >
        <div className=" flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 " >
          {images.map((item, index) => {
            return (
              <div className="w-72 max-[1523px]:w-60 h-96 relative " key={index} >
                <img src={Frame} className="w-10 h-10 absolute right-3 top-5 " />
                <div className=" w-72 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />

                </div>
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

export default Limelight;
