import React from 'react'

const Input = ({ type, className, id, onChange }) => {
    return (
        <input type={type} className={className}
            onChange={onChange}
            id={id}
        />
    )
}

export default Input