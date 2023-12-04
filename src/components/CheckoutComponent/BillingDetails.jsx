import React from "react";

import Input from "../../atoms/Input";

import { formArray } from "../../pages/AllArrays/Arrays";

const BillingDetails = (props) => {
  return (
    <div
      className="billing-width p-2  max-[1200px]:gap-x-4 gap-y-8 flex justify-evenly flex-wrap py-20 "
      
    >
      {formArray.map((item, index) => (
        <div
          key={index}
          className="flex  w-5/12 max-[1060px]:w-8/12 max-[616px]:w-full flex-wrap flex-col "
        >
          <span className="font-semibold">{item.formLabel}</span>
          <br />
           <Input
            className=" rounded-lg  p-4 bg-[#F6F6F6]"
            placeholder={item.placeholder}
          />
        </div>
      ))}
    </div>
  );
};

export default BillingDetails;
