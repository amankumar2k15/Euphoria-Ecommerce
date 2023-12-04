import React from 'react'

const Input = ({ type, className, id, onChange ,placeholder}) => {
    return (
        
            <input type={type} className={className}
            onChange={onChange}
            id={id}
            placeholder={placeholder}
        />
        
    )
}

export default Input