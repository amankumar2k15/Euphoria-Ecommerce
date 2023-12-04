import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CiStar } from "react-icons/ci";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import productsliderimg from "../../assets/multipleImg/productDetailImg.svg";
import productDetailImg1 from "../../assets/multipleImg/productDetailImg1.png";
import productDetailImg2 from "../../assets/multipleImg/productDetailImg2.png";
import productDetailImg3 from "../../assets/multipleImg/productDetailImg3.png";
import productDetailImgGif from "../../assets/multipleImg/productDetailImgGif.gif"
import { RiMessage3Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { color } from "../AllArrays/Arrays";

import { CiDeliveryTruck } from "react-icons/ci";
import HomeTitle from "../../atoms/HomeTitle";

const ProductDetail = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                },
            },
        ],
    };

    const sliderImages = [
        { img: productDetailImg1, alt: "Image 1" },
        { img: productDetailImg2, alt: "Image 2" },
        { img: productDetailImg3, alt: "Image 3" },
        { img: productDetailImg2, alt: "Image 4" },
    ];
    let productdesc = [
        {
            fabric: "Bio-washed Cotton",
            Pattern: "Printed",
            Fit: "Regular-fit",
            Neck: "Round Neck",
            Sleeve: "Half-sleeves",
            Style: "Casual Wear",
        },
    ];


    const availableSizes = ["XS", "M", "L", "XL"];
    return (
        <>
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center product-detail">
                <div className=" md:w-1/5 mt-5 md:mt-44 ml-6 md:ml-0  ">
                    <Slider {...settings}>
                        {sliderImages.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <div key={index} className="flex justify-center text-center">
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="w-[68.04px] h-[68.04px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="w-full  mt-6 md:mt-0 md:w-1/2 lg:w-2/5 lg:ml-0">
                    <img
                        src={productsliderimg}
                        className="object-cover w-full  md:max-h-[725px] px-3"
                        alt="Product"
                    />
                </div>

                <div className=" sm:w-50 mt-6 md:mt-0 ">
                    <div className="product-content ml:ml-11 sm:ml-1 w-50 ">
                        <div className="md:justify-start mt-10 items-center gap-[15px] flex cursor-pointer justify-center ">
                            <div className="text-mediumBlack text-lg font-medium ">Shop</div>
                            <span className="mt-1 -ml-4 text-mediumBlack">
                                <IoIosArrowForward className="ml-2" />
                            </span>
                            <div className="text-mediumBlack text-lg font-medium ">Women</div>
                            <span className="mt-1 -ml-4 text-mediumBlack">
                                <IoIosArrowForward className="ml-2" />
                            </span>
                            <div className="text-mediumBlack text-lg font-medium ">Top</div>
                        </div>
                        <div className="text-lightBlack text-2xl sm:text-[34px] px-2 sm:px-0 font-semibold mt-7 leading-[47.60px] tracking-wide md:text-left text-center">
                            Raven Hoodie With <br />
                            Black colored Design
                        </div>
                        <div className="flex mt-6 gap-2 md:justify-start justify-center items-center">
                            <CiStar className="text-purpleColor" />
                            <CiStar className="text-purpleColor" />
                            <CiStar className="text-purpleColor" />
                            <CiStar />
                            <CiStar />
                            <div className="text-mediumBlack text-lg font-medium -mt-1 gap-2 ml-3">
                                3.5
                            </div>
                            <div className=" justify-center md:justify-start items-center gap-[15px] flex">
                                <RiMessage3Line className="ml-8 -mt-1" />
                                <div className="text-mediumBlack text-md font-medium -mt-1 ml-0 ">
                                    120 comment
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-6 md:justify-start justify-center">
                            <div className="text-lightBlack">Select Size</div>
                            <div className="ml-9 text-mediumBlack">Size Guide</div>
                            <FaArrowRightLong className="mt-1 ml-2" />
                        </div>
                        <div className="flex md:justify-start justify-center items-center gap-5 mt-4">
                            {availableSizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="w-[38px] h-[38px] relative rounded-xl border text-lightBlack border-stone-300 hover:bg-purpleColor hover:text-white cursor-pointer"
                                >
                                    <div className="w-9 absolute text-center  text-sm font-medium mt-2 ">
                                        {size}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-[#3F4646] text-lg font-semibold mt-12  md:text-left text-center">
                            Colours Available{" "}
                        </div>

                        <div className="flex justify-center md:justify-start mt-2 items-center gap-3">
                            {color.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[22px] h-[22px] rounded-full bg-gray-300  cursor-pointer"
                                    style={{ backgroundColor: item.color }}
                                />
                            ))}
                        </div>
                        <div className="flex md:mr-2 mt-9 md:justify-start justify-center items-center flex-col sm:flex-row md:gap-4">
                            <button className="border justify-center items-center text-sm flex flex-col sm:flex-row py-3 px-7 lg:px-11 md:ml-0  border-spacing-2 mt-4 text-center rounded-lg text-white font-semibold  bg-purpleColor">
                                <span>
                                    <CiShoppingCart className="text-lg mr-3" />
                                </span>
                                Add To Cart
                            </button>
                            <button className="border items-center py-2 border-neutral-700  border-spacing-2 mt-4 rounded-lg text- lightBlack px-9 text-center  text-lg font-bold ">
                                $63.00
                            </button>
                        </div>
                        <div className=" h-[0px] border mt-8 border-stone-300"></div>
                        <div className="p-2">
                            <div className="flex mt-4 p-5 md:justify-start justify-center  cursor-pointer ">
                                <div className="text-lightBlack whitespace-normal md:whitespace-nowrap flex md:text-lg text-sm ">
                                    <span>
                                        {" "}
                                        <CiCreditCard1 className="mt-1 mr-4 " />
                                    </span>
                                    Secure payment
                                </div>
                                <div className="ml-20 flex mt-1 whitespace-normal md:whitespace-nowrap md:text-lg text-sm ">
                                    <span>
                                        {" "}
                                        <IoShirtOutline className="mr-2 mt-1" />{" "}
                                    </span>
                                    Size Fit
                                </div>
                            </div>
                            <div className="flex p-5 md:justify-start justify-center  cursor-pointer ">
                                <div className="text-lightBlack flex mt-1  md:whitespace-nowrap md:text-lg text-sm">
                                    <span>
                                        {" "}
                                        <CiDeliveryTruck className="mt-1 mr-4" />
                                    </span>{" "}
                                    Free shipping
                                </div>
                                <div className="ml-20">
                                    <div className="text-lightBlack flex whitespace-normal md:whitespace-nowrap text md:text-lg text-sm">
                                        <span>
                                            <FaExpandArrowsAlt className="mr-2 mt-1" />
                                        </span>
                                        Free Shipping & Returns
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-4 prod-desc mt-16">
                {/* Product-Des-Content */}
                <div className=" w-full md:w-5/ lg:w-6/12 container m-auto">
                    <HomeTitle title="Product Description" />

                    <div className="sm:ml-12 px-2 sm:px-0 ml-2">
                        <div className="text-lg font-bold text-lightBlack ">
                            Description
                        </div>
                        <div className="text-mediumBlack text-base font-nowrap  pt-6 leading-[25px] tracking-tight">
                            100% Bio-washed Cotton – makes the fabric extra soft & silky.
                            Flexible ribbed crew neck. Precisely stitched with no pilling & no
                            fading. Provide all-time comfort. Anytime, anywhere. Infinite
                            range of matte-finish HD prints.
                        </div>
                        <div className="product-detail opacity-60 xl:ml-8 ml-0 sm:p-4 p-0 mt-8 text-sm sm:text-md bg-mediumGray rounded-xl">
                            {productdesc.map((items, index) => {
                                return (
                                    <div key={index} className="sm:mr-8 mr-0 ">
                                        <div className="flex md:mx-5 mx-0 mb-5 whitespace-nowrap">
                                            <div className="mr-14">
                                                <div className="text-mediumBlack leading-none tracking-tight sm:whitespace-nowrap whitespace-normal ">
                                                    Fabric
                                                </div>
                                                <div className="text-lightBlack mt-3 leading-none tracking-tight sm:whitespace-nowrap whitespace-normal font-semibold">
                                                    {items.fabric}
                                                </div>
                                            </div>
                                            <div className="mr-16">
                                                <div className="text-mediumBlack sm:whitespace-nowrap whitespace-normal">
                                                    Pattern
                                                </div>
                                                <div className="text-lightBlack font-bold whitespace-nowrap">
                                                    {items.Pattern}
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="text-mediumBlack sm:whitespace-nowrap whitespace-normal">
                                                    Fit
                                                </div>
                                                <div className="text-lightBlack sm:whitespace-nowrap whitespace-normal font-bold">
                                                    {items.Fit}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex md:mx-5 mx-0">
                                            <div className="mr-16 pr-6">
                                                <div className="text-mediumBlack sm:whitespace-nowrap whitespace-normal">
                                                    Neck
                                                </div>
                                                <div className="text-lightBlack sm:whitespace-nowrap whitespace-normal  font-bold">
                                                    {items.Neck}
                                                </div>
                                            </div>
                                            <div className="mr-10 ml-1">
                                                <div className="text-mediumBlack sm:whitespace-nowrap whitespace-normal">
                                                    Sleeve
                                                </div>
                                                <div className="text-lightBlack sm:whitespace-nowrap whitespace-normal font-bold">
                                                    {items.Sleeve}
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="text-mediumBlack sm:whitespace-nowrap whitespace-normal">
                                                    Style
                                                </div>
                                                <div className="text-lightBlack sm:whitespace-nowrap whitespace-normal font-bold">
                                                    {items.Style}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="product-image w-full lg:w-6/12 flex justify-center items-center mt-8 mb-7 lg:mb-0">
                    <img
                        src={productDetailImgGif}
                        className=" sm:w-[532px] h-[200px] sm:h-[250px] lg:mt-0 mt-9 px-2"
                    />
                </div>
            </div>
        </>



    );
};

export default ProductDetail;