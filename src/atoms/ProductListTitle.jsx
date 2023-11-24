import React from 'react'

const ProductListTitle = ({ title }) => {
    return (
        <div className="grid place-items-center px-6 sm:px-20 mb-2 sm:py-4">
            <div className="w-full">
                <div>
                    <div className="flex place-items-center w-max max-[600px]:w-full">
                        <div className="w-[6px] h-[40px] sm:h-[30px] rounded-lg bg-purpleColor"></div>
                        <div className="">
                            <div className="">
                                <p className=" font-semibold text-md sm:text-2xl md:text-3xl px-2">
                                    {title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListTitle