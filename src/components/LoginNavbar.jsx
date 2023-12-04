import React, { useState } from 'react'
import EuphoriaImg from "../assets/multipleImg/Euphoria.svg";
import GroupImg from "../assets/multipleImg/Group.svg";
import { BiSolidDownArrow } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { Link } from 'react-router-dom'

const LoginNavbar = () => {
    const [hide, setHide] = useState(true)

    return (
        <nav className='border border-b-darkGray border-t-0 border-x-0 relative'>
            <div className="bg-white container mx-auto font-titleFont  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">

                    {/* Logo  */}
                    <div className="relative flex items-center">
                        <img src={EuphoriaImg} alt="" />
                        <img src={GroupImg} alt="" className=" absolute top-7 left-9" />
                    </div>

                    {/* Rightsection */}
                    <div className={`${hide ? "hidden" : "visible"} bg-lightBlack flex py-12 pr-8 md:py-0 gap-4 md:gap-0 md:bg-lightGray absolute top-0 left-0 md:relative w-full md:w-2/3 lg:w-2/4 flex-col md:flex-row md:flex space-x-4`}>
                        <div className={`${hide ? "text-normal" : "text-center"}`}>
                            <button className="text-lightGray md:text-lightBlack  ml-6 md:ml-0  whitespace-nowrap font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center" type="button">
                                English(United-States)
                                <BiSolidDownArrow size={10} className='ml-2' />
                            </button>
                        </div>
                        <Link to="/login" type="button" className="w-full md:w-auto bg-purpleColor flex whitespace-nowrap flex-col md:flex-row  border text-lightGray rounded-lg text-sm px-10 py-2 text-center mr-3 md:mr-0 outline-none">
                            Login
                        </Link>

                        <Link to="/register" type="button" className="w-full md:w-auto text-purpleColor whitespace-nowrap flex flex-col md:flex-row  border border-lightBlack rounded-lg text-sm px-10 py-2 text-center mr-3 md:mr-0 outline-none">
                            Sign Up
                        </Link>
                    </div>

                    <div className=' flex md:hidden absolute top-4 right-0 '>
                        <button data-collapse-toggle="navbar-user" type="button"
                            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg  " aria-controls="navbar-user" aria-expanded="false"
                            onClick={() => setHide(!hide)}
                        >
                            {
                                hide ?
                                    <GiHamburgerMenu size={20} />
                                    :
                                    <RxCross2 className='text-lightGray' size={20} />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default LoginNavbar