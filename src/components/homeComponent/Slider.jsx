import React from "react";
import Slider from "react-slick";
import { slideImages } from "../../pages/AllArrays/Arrays";

const SliderComponent = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    <div className="mb-10 upperSlider">
      <Slider {...settings}>
        {slideImages.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.url} alt={`Slide ${index + 1}`} />
            </div>
          )
        })
        }
      </Slider>
    </div>
  );
};

export default SliderComponent;
