import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:max-w-[1024px] w-full mx-auto">
      <Carousel
        onClickItem={() => navigate("/booking")}
        autoPlay
        infiniteLoop
        className="cursor-pointer md:container mx-auto"
      >
        <div>
          <img src="/images/slider1.jpg" alt="" />
        </div>
        <div>
          <img src="/images/slider2.jpg" alt="" />
        </div>
        <div>
          <img src="/images/slider3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
