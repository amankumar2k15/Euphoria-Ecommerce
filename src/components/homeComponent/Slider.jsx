import React from 'react';
import slider3 from "../../assets/multipleImg/slideImage/slider3.png"
import slider1 from "../../assets/multipleImg/slideImage/slider1.png"
import slider2 from "../../assets/multipleImg/slideImage/slider2.png"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  { url: slider1 },
  { url: slider2 },
  { url: slider3 },
]

const Slider = () => {
  return (
    <div className="slide-container ">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className='h-[200px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] flex center center bg-cover w-full' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slider