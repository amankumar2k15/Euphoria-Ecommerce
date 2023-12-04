import React from "react";
import Input from "../../atoms/Input";
const ShippingAddress = (props) => {
  return (
    <div className="">
      <div className="flex p-3   max-w-screen-2xl m-auto">
        <div className=" px-8 ">
          <p className="text-2xl font-semibold lightBlack  non-italic tracking-wide max-[413px]:text-xl">
            Shipping Address
          </p>
          <p className="lightBlack font-normal lightBlack ">
            Select the address that matches your card or payment method.
          </p>
          <div className=" billing-width  p-6  bg-[#F6F6F6] my-10 rounded-lg"   >
            <div className="flex  py-4  border-b-2 border-gray-300">
              <Input type="checkbox" />
              <p className="px-4 lightBlack text-xl  font-bold max-[413px]:text-sm">Same as Billing address</p>
            </div>
            <div className="flex  py-4">
              <Input type="checkbox"   />
              <p className="px-4 lightBlack text-xl   font-bold max-[413px]:text-sm">Use a different Shipping address</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
