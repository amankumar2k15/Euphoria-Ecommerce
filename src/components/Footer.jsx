import React from "react";

const Footer = () => {

    const details = [{ list: "Contact Us" }, { list: " Track Order" }, { list: "Returns & Refunds" }]

    const anchorTag = [
        { href: "", classes: [{ iconClass: "fa-brands fa-square-facebook " }] },
        { href: "", classes: [{ iconClass: "fa-brands fa-square-github text-2xl" }] },
        { href: "", classes: [{ iconClass: "fa-brands fa-linkedin text-2xl " }] },
        { href: "", classes: [{ iconClass: "fa-brands fa-square-instagram text-2xl" }] },
    ]

    return (
        <div className=" w-full grid place-items-center bg-[#3c4242] h-max text-lightGray p-4">
            <div className="w-11/12 flex justify-center sm:justify-between md:p-20 flex-wrap gap-x-20 gap-y-4">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-medium">Need Help</p>
                    <ul className=" p-4 m-4">
                        {
                            details?.map((item, index) => <li className="mb-2" key={index}>{item.list}</li>)
                        }
                    </ul>
                </div>

                <ul className="p-4 m-4 flex flex-col justify-between">
                    <div>
                        <li><i className="fa-solid fa-envelope text-lightGray"></i> {" "}support@gmail.com</li>
                        <li className="text-lightGray">Address-Dice Acdemy</li>
                    </div>
                    <div className="flex justify-between">
                        {
                            anchorTag?.map((items, index) => {
                                return (
                                    <a key={index} href="" className="text-lightGray text-2xl ">
                                        {items.classes.map((data, index) => {
                                            return (
                                                <i key={index} className={data.iconClass}></i>
                                            )
                                        })}
                                    </a>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
