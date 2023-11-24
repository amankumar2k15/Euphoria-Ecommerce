import React, { useState } from 'react'
import StyleAside from '../../../atoms/StyleAside';

const PriceCloth = () => {
  const [value, setValue] = useState(50); // Initial value for the range input

  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='p-4 border'>
      <StyleAside text="Price" />
      <input
        type="range"
        min="0"
        max="1000"
        value={value}
        className='border-hidden outline-none'
        onChange={handleRangeChange}
      />
      <p>Rs. {value}</p>
    </div>
  )
}

export default PriceCloth