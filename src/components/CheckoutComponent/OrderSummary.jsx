import React from "react";
import { sumOrder } from "../../pages/AllArrays/Arrays";
const orderSummary = () => {
  return (
    <div className="order-summary-width p-4 ">
      <p className=" font-semibold text-2xl ">OrderSummary</p>
      {sumOrder.map((item, index) => (
        <div
          className="flex flex-row    justify-between   border-b-2 border-gray-100 border-t-2  p-4 my-4 gap-x-20 gap-y-10 flex-wrap  "
          key={index}
        >
        
            <div className="w-24 h-24">
            <img className="w-24 h-24" src={item.src} />
            </div>
          

          <div className="flex flex-row  w-72 gap-x-10 flex-wrap  justify-between">
            <div className="flex flex-col  gap-1 ">
              <span className="font-semibold">{item.topName}</span>
              <span className="font-semibold">{item.colorTop}</span>
              <span className="font-semibold">Quantity:{item.quantity}</span>
            </div>
            <div className=" font-semibold   py-6 ">
              <span>{item.topPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default orderSummary;
