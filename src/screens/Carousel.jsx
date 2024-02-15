import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enable fade transition
    cssEase: 'linear', // Linear easing for smoother fade
    
  };

  return (
    <div  className={` w-[100%] mt-20 `}>
      <Slider {...settings} className="rounded-sm overflow-hidden">
        <div className="relative">
          <img
            src={image2}
            alt="Slide 1"
            className="w-full h-[100vh] object-cover rounded-sm transition-opacity duration-500"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ">
            <h2 className="text-white text-2xl font-bold">Slide 1</h2>
          </div>
        </div>
        <div className="relative">
          <img
            src={image1}
            alt="Slide 2"
            className="w-full h-[100vh] object-cover rounded-sm transition-opacity duration-500"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ">
            <h2 className="text-white text-2xl font-bold">Slide 2</h2>
          </div>
        </div>
        <div className="relative">
          <img
            src={image3}
            alt="Slide 3"
            className="w-full h-[100vh] object-cover rounded-sm transition-opacity duration-500"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ">
            <h2 className="text-white text-2xl font-bold">Slide 3</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
