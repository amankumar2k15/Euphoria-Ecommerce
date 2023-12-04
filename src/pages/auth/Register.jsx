import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SignInImg from "../../assets/SignIn.png"
import Input from "../../atoms/Input"
import { SyncLoader } from "react-spinners";
import { RegisterService } from '../../service/api.service'
import { toast } from "react-toastify"
import LeftSideImg from '../../components/authComponent/LeftSideImg'
import AuthCwgCwt from '../../components/authComponent/AuthCwgCwt'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Register = ({ title, subtitle }) => {
    const navigate = useNavigate()
    const [hide, sethide] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: null,
        email: null,
        password: null
    })

    const handleSubmit = (e) => {
        console.log("hey");
        setLoading(true)
        // e.preventDefault()
        RegisterService(formData).then((res) => {
            setLoading(false)
            toast.error(res.data.message)
            navigate("/login")
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
                                    <LeftSideImg srcImg={SignInImg} />

                                    {/* RightSideSection */}
                                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                        <div className="mb-10">
                                            <h1 className="font-bold text-[34px] text-gray-900">{title}</h1>
                                        </div>

                                        {/* Continue with google and twitter button  */}
                                        <AuthCwgCwt />
                                        {/* Continue with google and twitter button  */}

                                        <div className='flex flex-col px-3'>
                                            {/* Email  */}
                                            <div className="flex -mx-3 ">
                                                <div className="w-full lg:w-[526px] mb-5">
                                                    <label htmlFor="" className="text-xs px-1">Username</label>
                                                    <div className="flex">
                                                        <Input type="username" className="pl-6 py-2 focus:outline-lightBlack w-full rounded-lg border" id='username'
                                                            onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex -mx-3 ">
                                                <div className="w-full lg:w-[526px] mb-5">
                                                    <label htmlFor="" className="text-xs px-1">Email address</label>
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
                                                </div>
                                            </div>


                                            <div className="flex -mx-3">
                                                <div className="w-full mb-1">
                                                    <button type="button" onClick={handleSubmit} className="flex items-center justify-center h-10 w-3/6 bg-purpleColor border text-lightGray rounded-lg text-sm px-10 py-2 text-center mr-3 md:mr-0 outline-none">
                                                        {isLoading ? <SyncLoader size={8} color="#fff" /> : "Login"}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-lightBlack -ml-3">Already have an account?
                                                <NavLink to="/login" className=' cursor-pointer hover:text-purpleColor'>
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

export default Register