/* eslint-disable react/prop-types */
// import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const ProductCard2 = ({ product}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  }; 

  return (
    <>

      <Slider {...settings} className=" w-[100%]">
        {product.map((item, index) => (
          <div
            key={index}
            className="grid h-72 w-52 bg-white text-black grid-rows-3 py-3 px-4 border-2"
          >
            <div
              className=" bg-center bg-cover h-full"
              style={{ backgroundImage: `url(${item.image})` }}
            >

            </div>

          </div>
        ))}
      </Slider>
    </>
  );
};
