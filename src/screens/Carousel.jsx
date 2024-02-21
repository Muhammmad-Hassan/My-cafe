import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Carousel = () => {
  const slides = [
    { image: image2, },
    { image: image1, },
    { image: image3, }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true, 
    autoplaySpeed: 3000, 
  };
  

  return (
    <div className="w-full mt-20">
      <Slider {...settings} className="rounded-sm overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              className="w-full h-[100vh] object-cover rounded-sm transition-opacity duration-500"
            />
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
