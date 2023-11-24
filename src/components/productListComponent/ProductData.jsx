import React from "react";
import img1 from "../../assets/multipleImg/1men.png";
import img2 from "../../assets/multipleImg/2men.png";
import img3 from "../../assets/multipleImg/3men.png";
import img4 from "../../assets/multipleImg/4men.png";
import img5 from "../../assets/multipleImg/5men.png";
import img6 from "../../assets/multipleImg/6men.png";
import img7 from "../../assets/multipleImg/7men.png";
import img8 from "../../assets/multipleImg/8men.png";

const ProductData = () => {
  let images = [
    { src: img1, productName: "Jhanvi's Brand", name: "black Sweatshirt ", price: "$123.00" },
    { src: img2, productName: "Jhanvi's Brand", name: "Printed T-Shirts", price: "$123.00" },
    { src: img3, productName: "Jhanvi's Brand", name: "Plain T-shirts", price: "$123.00" },
    { src: img4, productName: "Jhanvi's Brand", name: "Polo T-Shirt", price: "$123.00" },
    { src: img5, productName: "Jhanvi's Brand", name: "Hoodies & Sweatshirt", price: "$123.00" },
    { src: img6, productName: "Jhanvi's Brand", name: "Jeans", price: "$123.00" },
    { src: img7, productName: "Helen's Brand", name: "Activewear", price: "$123.00" },
    { src: img8, productName: "Nike's Brand", name: "Boxers", price: "$123.00" },
    { src: img1, productName: "Jhanvi's Brand", name: "Boxers", price: "$123.00" },
    { src: img2, productName: "Jhanvi's Brand", name: "Activewear" },
    { src: img3, productName: "helen's Brand", name: "Boxers", price: "$123.00" },
    { src: img4, productName: "Jhanvi's Brand", name: "Boxers", price: "$123.00" },
    { src: img5, productName: "Nike's Brand", name: "Boxers", price: "$123.00" },
    { src: img6, productName: "Jhanvi's Brand", name: "Activewear", price: "$123.00" },
    { src: img7, productName: "Woden's Brand", name: "Boxers", price: "$123.00" },
  ];

  return (
    <>
      <div className="w-4/5">
        <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-10 p-4 ">
          {images.map((item, index) => {
            return (
              <div className="w-52 max-[1523px]:w-60 h-96 " key={index}>
                <div className="w-52 max-[1523px]:w-60 h-max">
                  <img src={item.src} className="h-72 rounded w-full" />
                </div>
                <div className="relative h-max p-2 flex justify-between">
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
    </>
  );
};

export default ProductData;
