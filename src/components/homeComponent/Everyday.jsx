import React from "react";

const Everyday = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center ">
        <div className="p-4 lg:w-11/12 lg:flex">
          <div className="h-full lg:h-auto px-4 rounded-lg bg-img1 text-white lg:w-1/2 lg:mr-4">
            <div className=" py-10 sm:p-20">
              <div>
                <p className="font-extrabold text-xl sm:text-2xl ">WE MADE YOUR EVERYDAY<br /> FASHION BETTER!</p>
              </div>
              <div className="my-4">
                <p className=" text-md sm:text-xl tracking-wide">In our journey to improve everyday fashion,<br /> euphoria presents EVERYDAY wear range- <br />Comfortable & Affordable fashion 24/7</p>
              </div>
              <button className="justify-center bg-white text-black py-2 px-3 sm:py-3 sm:px-6 rounded hover:bg-[#8A33FD] hover:text-white">Shop Now</button>
            </div>
          </div>
          <div className="h-full bg-cover lg:h-auto lg:rounded-lg bg-img2 lg:w-1/2" ></div>
        </div>
      </div>

    </>
  );
};

export default Everyday;
