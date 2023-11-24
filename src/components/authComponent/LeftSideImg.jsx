import React from 'react'

const LeftSideImg = ({ srcImg }) => {
    return (
        <div className='hidden md:flex w-1/2  '>
            <img className='object-top w-full object-cover' src={srcImg} alt='Login' />
        </div>
    )
}

export default LeftSideImg