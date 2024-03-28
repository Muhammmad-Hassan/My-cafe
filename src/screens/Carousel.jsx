import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImgLoad = () => {
    setIsLoading(false);
  };
  const slides = [{ image: image2 }, { image: image1 }, { image: image3 }];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="rounded-sm overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {isLoading && (
              <div className="w-full h-full rounded-sm flex bg-white justify-center items-center">
                <h1 className=" font-semibold text-lg text-black">
                  <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-14 h-14 border-4 text-blue-400 text-3xl animate-spin border-gray-300 flex items-center justify-center border-t-yellow-400 rounded-full"></div>
                    Loading...
                  </div>
                </h1>
              </div>
            )}
            <img
              onLoad={handleImgLoad}
              src={slide.image}
              className={`w-full h-full object-cover rounded-sm transition-opacity duration-500 ${
                isLoading ? "hidden" : " visible"
              }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
