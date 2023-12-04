import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { cartItems } from "../AllArrays/Arrays";
const Cart = () => {
  return (
    <>
      <div className="cart-section-header container mx-auto">
        <div className="">
          <div className="flex items-center p-4 ">
            <div className="py-6">
              <div className="flex align-items-center gap-1.5">
                <div className="w-max mx-4 ">
                  <p className="text-sm font-semibold max-w-[400px]:text-lg pb-4 text-mediumBlack">
                    Home
                  </p>
                </div>
                <span className="mt-1 -ml-4 text-mediumBlack">
                  <IoIosArrowForward />
                </span>
                <div className="w-max -mx-0 ">
                  <p className="  text-sm font-semibold text-lightBlack ">
                    Add to cart
                  </p>
                </div>
              </div>
              <div className="">
                <div className=" mx-4 ">
                  <p className="  text-sm font-semibold text-mediumBlack sm::whitespace-normal">
                    Please fill in the fields below and click place order to
                    complete your purchase!
                  </p>
                </div>
                <div className="w-max mx-4 ">
                  <p className="  text-sm font-semibold  text-mediumBlack">
                    Already registered?{" "}
                    <Link
                      to="/login"
                      className="text-purpleColor cursor-pointer"
                    >
                      Please login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        {" "}
        {cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className="md:flex py-8 md:py-10 lg:py-8 border-t border-black"
            >
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={item.src}
                  alt="Black Leather Bag"
                  className=" object-center md:block hidden w-3/6"
                />
                <img
                  src={item.src}
                  alt="Black Leather Bag"
                  className="md:hidden h-full object-center object-cover w-3/6 my-6 mx-8"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 mx-8 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-black">
                    {item.productName}
                  </p>

                  <div className="inline-flex justify-center w-1/5 ">
                    <div className="minus pt-1">
                      <FiMinus />
                    </div>
                    <input
                      className=" border text-center w-8"
                      type="text"
                      defaultValue="1"
                    />
                    <div className="plus pt-1">
                      <FaPlus />
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 font-semibold dark:text-black pt-2">
                  Amount: {item.price}
                </p>
                <p className="text-xs leading-3 text-gray-600 font-semibold dark:text-black py-4">
                  Color: {item.color}
                </p>

                <p className=" text-xs leading-3 text-gray-600 font-semibold dark:text-black">
                  Size:{item.size}
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 font-semibold text-gray-800 dark:text-black cursor-pointer">
                      Subtotal :{item.subtotal}
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      {" "}
                      <IoTrashBinOutline className="text-purpleColor " />
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-black"></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* //Medium to larger screen code  */}
      <div className="hidden md:block">
        <table className="w-full text-center text-md font-light">
          <thead className="border-b bg-lightBlack font-medium text-white border-neutral-500 ">
            <tr className="">
              <th
                scope="col"
                className="font-semibold text-sm md:text-md lg:text-lg uppercase py-4"
              >
                Product Details
              </th>
              <th
                scope="col"
                className=" font-semibold text-sm md:text-md lg:text-lg  uppercase py-4"
              >
                Price
              </th>
              <th
                scope="col"
                className=" font-semibold text-sm md:text-md lg:text-lg  uppercase py-4"
              >
                Quantity
              </th>
              <th
                scope="col"
                className=" font-semibold text-sm md:text-md lg:text-lg  uppercase py-4"
              >
                shipping
              </th>
              <th
                scope="col"
                className=" font-semibold text-sm md:text-md lg:text-lg  uppercase py-4"
              >
                subtotal
              </th>
              <th
                scope="col"
                className=" font-semibold text-sm md:text-md lg:text-lg  uppercase py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              return (
                <tr key={index} className="border-b border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className=" md:w-4/12 2xl:w-1/4 w-full sm:ps-7 p-0 gap-3 flex">
                      <img
                        src={item.src}
                        alt="photo"
                        height={100}
                        width={100}
                      />
                      <div>
                        <div className="text-left font-sans font-bold  sm::whitespace-normal md:whitespace-normal lg:whitespace-nowrap xl:text-xl sm:text-sm">
                          {item.productName}
                        </div>
                        <div className="text-left text-mediumBlack text-sm">
                          Color : {item.color}
                        </div>
                        <div className="text-left text-mediumBlack text-sm">
                          Size : {item.size}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap font-bold text-lightBlack px-6 py-4">
                    {item.price}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 ">
                    <div className="inline-flex justify-center w-1/5 ">
                      <div className="minus pt-1">
                        <FiMinus />
                      </div>
                      <input
                        className=" border text-center w-8"
                        type="text"
                        defaultValue="1"
                      />
                      <div className="plus pt-1">
                        <FaPlus />
                      </div>
                    </div>

                    <div className="quantity">
                      <div className=""></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap  text-darkGray px-6 py-4">
                    {item.shipping}
                  </td>
                  <td className="whitespace-nowrap font-bold text-lightBlack px-6 py-4">
                    {item.subtotal}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <IoTrashBinOutline className="text-purpleColor cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="total-summary bg-mediumGray md:flex justify-around mt-5 sm:p-4 block">
        <div className="discound codes mx-2 my-7">
          <div className=" text-neutral-700 text-2xl font-semibold mb-2 md:text-left text-center">
            Discount Codes
          </div>
          <div className=" text-zinc-500 text-base font-normal md:text-left text-center">
            Enter your coupon code if you have one
          </div>
          <div className="flex mt-6 md:justify-start justify-center">
            <input className=" bg-white pl-4 rounded-md outline-none md:text-left text-center" />
            <div className=" text-white rounded-md md:text-left text-center -ml-5 font-semibold p-2 text-sm bg-purpleColor">
              Apply Coupon
            </div>
          </div>

          <div className="text-center md:text-left">
            <button className="border border-spacing-2 mt-4 bg-white rounded-lg px-11 md:px-5 py-2 border-darkGray">
              Continue shopping
            </button>
          </div>
        </div>

        {/* //Discount Code  */}
        <div className="grand total mx-2 bg-mediumGray sm:my-7 my-11">
          <div className="flex justify-around">
            <div className="subtotal">Sub Total</div>
            <div className="">$513.00</div>
          </div>
          <div className="flex justify-around">
            <div className="subtotal mt-3">Shipping</div>
            <div className="">$5.00</div>
          </div>
          <div className="flex justify-around mt-6 font-bold">
            <div className="subtotal "> Grand Total</div>
            <div className="">$518.00</div>
          </div>
          <div className=" w-[0px] md:w-[465px] h-[0px] border mt-5 border-stone-300 "></div>

          <div className="flex justify-center ">
            <Link to="/checkout" className="border items-center px-4 py-2  border-spacing-2 mt-4 text-center rounded-lg text-white font-semibold  bg-[#8A33FD]">
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
