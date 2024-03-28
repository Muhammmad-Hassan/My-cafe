import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";



const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);

  const handleImgLoad = () => {
    setIsLoading(false);
  };

  const slides = [{ image: image2 }, { image: image1 }, { image: image3 }];

  

  const NextArrow = ({ onClick }) => {
    return (
      <button className=" text-white next-arrow absolute top-52 right-2" onClick={onClick}>
        <FaCircleArrowRight className="fill-yellow-500 text-xl"/>
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="prev-arrow absolute z-10 text-white top-52 left-2" onClick={onClick}>
        <FaCircleArrowLeft className=" fill-yellow-500 text-xl"/>
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

 

  return (
    <div className="w-full outline-4   outline-blue-900  ">
      <Slider  {...settings} className="rounded-sm overflow-hidden ">
        {slides.map((slide, index) => (
          <div key={index} className="  h-full w-full">
            {isLoading && (
              <div className="w-full h-[400px] rounded-sm flex bg-white justify-center items-center">
                <h1 className="font-semibold text-lg text-black">
                  <div className="flex-col [gap]-4 w-full flex items-center justify-center">
                    <div className="w-14 h-14 border-4 text-blue-400 text-3xl animate-spin border-gray-300 flex items-center justify-center border-t-yellow-400 rounded-full"></div>
                    Loading...
                  </div>
                </h1>
              </div>
            )}
            <img
              onLoad={handleImgLoad}
              src={slide.image}
              className={`w-full h-[400px] object-cover rounded-sm transition-opacity duration-500 ${
                isLoading ? "hidden" : "visible"
              }`}
            />
            <PrevArrow/>  
            <NextArrow/>
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default Carousel;
