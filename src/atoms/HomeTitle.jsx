import React from 'react'

const HomeTitle = ({ title }) => {
    return (
        <div className="ml-4">
            <div className="flex items-center p-4 ">
                <div className="w-[6px] h-[30px] rounded-lg bg-purpleColor"></div>
                <div className="">
                    <div className="w-max mx-4 ">
                        <p className=" text-3xl font-semibold max-[400px]:text-lg">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTitle