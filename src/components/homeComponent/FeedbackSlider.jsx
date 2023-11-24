import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rev1 from "/rev1.svg";
import rev2 from "/rev2.svg";
import rev3 from "/rev3.svg";
import { CiStar } from "react-icons/ci";

const data = [
    {
        img: rev1,
        name: `Floyd Miles`,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit . Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        img: rev2,
        name: `Ronald Richards`,
        review: `ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
        img: rev3,
        name: `Savannah Nguyen`,
        review: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
        img: rev1,
        name: `Floyd Miles`,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit . Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        img: rev2,
        name: `Ronald Richards`,
        review: `ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
];


const FeedbackSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className=" container m-auto ">
            <div className=" pb-10 md:pb-20 px-10">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="my-custom-slide-style p-[23.19px] h-[320px] relative  bg-white rounded-[10px]  border-2 border-stone-300 flex-col justify-start items-start gap-5 flex"

                        >
                            <div className="self-stretch justify-between items-start flex">
                                <img className="" src={d.img} />
                                <div className="flex absolute  right-5   top-6">
                                    <CiStar className="text-purpleColor" />
                                    <CiStar className="text-purpleColor" />
                                    <CiStar className="text-purpleColor" />
                                    <CiStar />
                                    <CiStar />
                                </div>
                            </div>
                            <div className="text-left text-neutral-700 text-[22px] font-medium  tracking-wide">
                                {d.name}
                            </div>
                            <div className="self-stretch  text-zinc-500 text-sm font-normal  tracking-tight pt-2  ">
                                {d.review}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FeedbackSlider;
