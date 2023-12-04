import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginImg from "../../assets/Login.png"
import Input from "../../atoms/Input"
import { SyncLoader } from "react-spinners";
import { LoginService } from '../../service/api.service'
import { toast } from "react-toastify"
import LeftSideImg from '../../components/authComponent/LeftSideImg'
import AuthCwgCwt from '../../components/authComponent/AuthCwgCwt';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = ({ title, subtitle }) => {
    const [hide, sethide] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: null,
        password: null
    })

    const handleSubmit = (e) => {
        console.log("hey");
        setLoading(true)
        // e.preventDefault()
        LoginService(formData).then((res) => {
            console.log(res);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err);
            toast.error(err.response.data.message)
        })
    }

    console.log(formData);
    return (
        <>
            <section className="loginForm flex" >
                <div className=' w-full'>
                    <>
                        <div className=" flex items-center justify-center ">
                            <div className=" w-full overflow-hidden">
                                <div className="md:flex h-[582px] w-full">
                                    {/* LeftSideImageSection  */}
                                    <LeftSideImg srcImg={LoginImg} />

                                    {/* RightSideSection */}
                                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                        <div className="mb-10">
                                            <h1 className="font-bold text-[34px] text-gray-900">{title}</h1>
                                        </div>

                                        {/* Continue with google and twitter button  */}
                                        <AuthCwgCwt />
                                        {/* Continue with google and twitter button  */}
                                        <div className="flex mx-0 ">
                                            <div className='flex flex-row items-center w-full lg:w-[526px] justify-between my-6'>
                                                <div className='bg-darkGray w-2/5 h-[1px]'></div>
                                                <div className=''>OR</div>
                                                <div className='bg-darkGray w-2/5 h-[1px]'></div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col px-3'>
                                            {/* Email  */}
                                            <div className="flex -mx-3 ">
                                                <div className="w-full lg:w-[526px] mb-5">
                                                    <label htmlFor="" className="text-xs px-1">Username or email address</label>
                                                    <div className="flex">
                                                        <Input type="email" className="pl-6 py-2 focus:outline-lightBlack w-full rounded-lg border" id='email'
                                                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Password  */}
                                            <div className="flex -mx-3  ">
                                                <div className="w-full lg:w-[526px] mb-5">
                                                    <label htmlFor="" className="text-xs px-1">Password</label>
                                                    <span className='float-right cursor-pointer' onClick={() => sethide(!hide)}>
                                                        {hide ?
                                                            <>
                                                                <IoMdEyeOff className='inline mr-1 mb-1' />
                                                                Hide
                                                            </> :
                                                            <>
                                                                <IoMdEye className='inline mr-1 mb-1' />
                                                                Show
                                                            </>
                                                        }
                                                    </span>
                                                    <div className="flex">
                                                        <Input
                                                            type={`${hide ? "password" : "text"}`}
                                                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                                                            className="pl-6 py-2 focus:outline-lightBlack w-full rounded-lg border"
                                                            id='password'
                                                        />

                                                    </div>
                                                    <Link to="/forgetPassword" className='text-sm text-semibold float-right cursor-pointer text-end hover:text-purpleColor underline'>
                                                        Forget your password
                                                    </Link>
                                                </div>
                                            </div>


                                            <div className="flex -mx-3">
                                                <div className="w-full mb-1">
                                                    <button type="button" onClick={handleSubmit} className="flex items-center justify-center h-10 w-3/6 bg-purpleColor border text-lightGray rounded-lg text-sm px-10 py-2 text-center mr-3 md:mr-0 outline-none">
                                                        {isLoading ? <SyncLoader size={8} color="#fff" /> : "Login"}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-lightBlack -ml-3">Don't have an account?
                                                <NavLink to="/register" className=' cursor-pointer hover:text-purpleColor'>
                                                    {subtitle}
                                                </NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </section>
        </>

    )
}

export default Login