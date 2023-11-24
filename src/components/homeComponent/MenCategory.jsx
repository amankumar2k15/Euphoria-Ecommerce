import React from "react";
import img1 from "../../assets/multipleImg/1men.png";
import img2 from "../../assets/multipleImg/2men.png";
import img3 from "../../assets/multipleImg/3men.png";
import img4 from "../../assets/multipleImg/4men.png";
import img5 from "../../assets/multipleImg/5men.png";
import img6 from "../../assets/multipleImg/6men.png";
import img7 from "../../assets/multipleImg/7men.png";
import img8 from "../../assets/multipleImg/8men.png";
import HomeTitle from "../../atoms/HomeTitle";

const MenCategory = () => {

  let images = [
    { src: img1, productName: "Explore now!", name: "Shirts", },
    { src: img2, productName: "Explore now!", name: "Printed T-Shirts", },
    { src: img3, productName: "Explore now!", name: "Plain T-shirts", },
    { src: img4, productName: "Explore now!", name: "Polo T-Shirt", },
    { src: img5, productName: "Explore now!", name: "Hoodies & Sweatshirt", },
    { src: img6, productName: "Explore now!", name: "Jeans", },
    { src: img7, productName: "Explore now!", name: "Activewear", },
    { src: img8, productName: "Explore now!", name: "Boxers", },
  ];

  return (
    <section className="limelight container mx-auto">
      <HomeTitle title="Categories For Men" />

      <div className=" grid place-items-center  ">
        <div className="  flex flex-wrap w-full justify-center gap-y-10 p-4 gap-x-20 ">
          {images.map((item, index) => {
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
