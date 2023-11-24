import React from 'react'
import GoogleSvg from "../../assets/Google.svg"
import TwitterSvg from "../../assets/twitter.svg"

const AuthCwgCwt = () => {
    return (
        <>
            <div className="mb-5 flex w-full xl:w-[526px] ">
                <button className="flex gap-2 justify-center py-2 items-center w-full border  border-lightBlack rounded-lg text-sm font-medium ">
                    <img src={GoogleSvg} alt='googleSvg image' />
                    <span className='text-purpleColor text-[16px]'>Continue with Google</span>
                </button>
            </div>

            <div className="mb-5 flex w-full xl:w-[526px] ">
                <button className="flex gap-2 justify-center py-2 items-center w-full border border-lightBlack rounded-lg text-sm font-medium ">
                    <img src={TwitterSvg} alt='googleSvg image' />
                    <span className='text-purpleColor text-[16px]'>Continue with Twitter</span>
                </button>
            </div>
        </>
    )
}

export default AuthCwgCwt