import React from "react";
import ProductListTitle from "../../atoms/ProductListTitle";
import  {Price} from "../../pages/AllArrays/Arrays"
const WomenClothData = () => {


  return (
    <>
      <ProductListTitle title=" Clothing For Women Online in India" />

      <div className="place-items-center px-6 sm:px-20">
        <div className="text-justify sm:text-start">
          <p className="py-1 text-mediumBlack font-semibold">
            Reexplore Women's Clothing Collection Online at Euphoria
          </p>
          <p className=" text-mediumBlack py-1">
            Women's Clothing – Are you searching for the best website to buy
            Clothing for Women online in India? Well, your search for the
            coolest and most stylish womens clothing ends here. From trendy
            Casual Womens Wear Online shopping to premium quality cotton women's
            apparel, Euphoria has closet of Women Collection covered with the
            latest and best designs of Women's Clothing Online.
          </p>
          <p className=" text-mediumBlack py-1">
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear.{" "}
          </p>
          <p className=" text-mediumBlack font-semibold mt-6">
            One-Stop Destination to Shop Every Clothing for Women: Euphoria
          </p>
          <p className="text-mediumBlack py-1">
            Today, Clothing for Women is gaining more popularity above all. This
            is because gone are the days when women were used to carrying
            uncomfortable fashion. Today, a lady looks prettier when she is in
            Casual Womens Wear which is a comfortable outfit. Concerning this,
            Euphoria has a big fat range of Stylish Women's Clothing that would
            make her the winner wherever she goes.{" "}
          </p>
          <p className="text-mediumBlack py-1">
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear. It is quite
            evident to say that there are very few Womens Clothing online stores
            where you can buy Western Wear for Women comprising the premium
            material and elegant design that you are always seeking for.
            Basically,{" "}
          </p>
        </div>
      </div>

      <ProductListTitle title="Buy Women's Clothing at Best Price" />
      {Price.map((item, index) => (
        <div key={index} className="flex px-6 sm:px-20 justify-between ">
          <div className="w-4/5 text-left p-4" key={index}>
            <p>{item.WomenClothes}</p>
          </div>
          <div className="w-1/5 text-center ">
            <p className="flex justify-center items-center h-full">{item.price}</p>
          </div>
        </div>
      ))}

    </>
  );
};

export default WomenClothData;
