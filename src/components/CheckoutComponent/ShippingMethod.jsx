import React from 'react'

const ShippingMethod = () => {
  return (
    <div className=" ">
    <div className="flex p-3   max-w-screen-2xl m-auto">
      <div className=" px-8 ">
        <p className="text-2xl font-semibold lightBlack  non-italic tracking-wide max-[413px]:text-xl">
          Shipping Method
        </p>
        <p className="lightBlack font-normal lightBlack ">
          Select the address that matches your card or payment method.
        </p>
        <div className="billing-width p-6  bg-[#F6F6F6] my-10 rounded-lg"   >
          <div className="flex  py-4 border-b-2 border-gray-300  ">
            
            <p className="px-2 lightBlack text-xl  font-bold max-[413px]:text-sm ">Arrives by Monday, June 7</p>
          </div>
          <div className="flex  py-4 justify-between flex-wrap">
            
            <p className="px-2 lightBlack text-xl   font-bold max-[413px]:text-sm">Delivery Charges</p>
            <p className="px-2 lightBlack text-xl   font-bold max-[413px]:text-sm">$500.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ShippingMethod