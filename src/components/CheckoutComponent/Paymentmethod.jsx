import React from 'react'
import Input from '../../atoms/Input'

const Paymentmethod = () => {
  return (
    <div className=" ">
    <div className="flex p-3   max-w-screen-2xl m-auto">
      <div className=" px-8 ">
        <p className="text-2xl font-semibold lightBlack  non-italic tracking-wide max-[413px]:text-xl">
          Payment Method
        </p>
        <p className="lightBlack font-normal lightBlack ">
        All transactions are secure and encrypted.
        </p>
        <div className="billing-width p-6  bg-[#F6F6F6] my-10 rounded-lg"   >
          <div className="flex flex-col py-4  border-b-2 border-gray-300">
            <div className='flex'><Input type="checkbox" />
            <p className="px-4 lightBlack text-xl  font-bold max-[413px]:text-sm">Credit card</p></div>
            <p className='px-8'>We accept all major credit cards.</p>
            <div className=' p-6  flex gap-x-40 gap-y-10 flex-wrap '>
              <Input border="1px solid"  className="border rounded-lg p-2 w-4/12 max-[800px]:w-full" placeholder="Enter card number"/>
              <Input border="1px solid" className="border rounded-lg p-2 w-4/12 max-[800px]:w-full" placeholder="Name of card"/>
              <Input border="1px solid" className="border rounded-lg p-2 w-4/12 max-[800px]:w-full" placeholder="Expiration Date(MM/YY)"/>
              <Input border="1px solid" className="border rounded-lg p-2 w-4/12 max-[800px]:w-full" placeholder="Security Code"/>
            </div>
          </div>
          <div className="flex flex-col py-4 border-b-2 border-gray-300">
            <div className='flex'><Input type="checkbox" />
            <p className="px-4 lightBlack text-xl  font-bold max-[413px]:text-sm">Cash on Delivery</p></div>
            <p className='px-8'>pay with cash upon delivery.</p>
          </div>
          
          <div className="flex  py-4">
            <Input type="checkbox"   />
            <p className="px-4 lightBlack text-xl   font-bold max-[413px]:text-sm">Paypal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Paymentmethod