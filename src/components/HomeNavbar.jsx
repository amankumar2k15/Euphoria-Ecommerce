import React, { useState } from "react";
import EuphoriaImg from "../assets/multipleImg/Euphoria.svg";
import GroupImg from "../assets/multipleImg/Group.svg";
import { FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom";

const HomeNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const listItems = [{ list: "shop" }, { list: "Man" }, { list: "woman" }, { list: "Combos" }, { list: "Joggers" },]

    return (
        <>
            <header className="bg-white shadow">
                <nav className="flex justify-between items-center w-full px-4 container mx-auto">
                    <div className="relative">
                        <img src={EuphoriaImg} alt="" className=" p-5" />
                        <img src={GroupImg} alt="" className=" p-5 absolute top-7 left-9" />
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex justify-between items-center w-fit">
                        <ul className="flex items-center gap-8">
                            {
                                listItems.map((item, index) => <Link className="capitalize hover:text-mediumBlack" to="/productList" key={index}>{item.list}</Link>)
                            }
                        </ul>

                        <div className=" items-center gap-4 p-5 flex ">
                            {/* searchButton */}
                            <div className="relative hidden sm:flex md:hidden lg:flex justify-center ">
                                <div className="absolute bg-mediumGray text-mediumBlack rounded-lg inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <AiOutlineSearch size={20} className="text-gray-600" />
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="outline-none hidden sm:flex md:hidden lg:flex pl-12 rounded-lg text-mediumBlack bg-mediumGray py-2"
                                    placeholder="Search"
                                />
                            </div>
                            <button className="bg-mediumGray text-center text-mediumBlack p-3 rounded-lg mr-2 hover:bg-purpleColor hover:text-white"><FaHeart /></button>
                            <button className="bg-mediumGray text-center text-mediumBlack p-3 rounded-lg mr-2 hover:bg-purpleColor hover:text-white"><FaShoppingCart /></button>
                            <button className="bg-mediumGray text-center text-mediumBlack p-3 rounded-lg mr-2 hover:bg-purpleColor hover:text-white"> <FaUser /></button>
                        </div>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle}>
                            <svg
                                className="w-6 h-6 cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-16 right-0 bg-white text-gray-900 w-full z-10">
                            <ul className="flex flex-col items-center gap-4 p-4">
                                {
                                    listItems.map((item, index) => <Link to="/productList" className="capitalize" key={index}>{item.list}</Link>)
                                }
                                <li className="block">
                                    {/* searchButton */}
                                    <div className="relative flex justify-center ">
                                        <div className="absolute bg-mediumGray text-mediumBlack rounded-lg inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <AiOutlineSearch size={20} className="text-gray-600" />
                                        </div>
                                        <input
                                            type="text"
                                            id="search-navbar"
                                            className="outline-none flex pl-12 rounded-lg text-mediumBlack bg-mediumGray py-2"
                                            placeholder="Search"
                                        />
                                    </div>
                                </li>
                                <div className="flex-row items-center gap-4 p-4 flex">
                                    <button className="bg-mediumGray text-center text-mediumBlack p-3 rounded-lg mr-2 hover:bg-purpleColor hover:text-white"><FaHeart /></button>
                                    <button className="bg-mediumGray text-center text-mediumBlack p-3 rounded-lg mr-2 hover:bg-purpleColor hover:text-white"><FaShoppingCart /></button>
                                    <button className="bg-mediumGray text-center text-mediumBlack p-3 rounded-lg mr-2 hover:bg-purpleColor hover:text-white"> <FaUser /></button>

                                </div>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>

        </>
    );
};

export default HomeNavbar;