/* eslint-disable react/prop-types */
// import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const ProductCard = ({ product}) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }; 

  return (
    <>

      <style>
        {`
          .slick-arrow::before {
            background-color: grey !important;
            padding:20px 5px;
            opacity:1 !important;
          }
          button{
            z-index:40;
          }

          .slick-next::before{
            margin-left:-60px !important;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 12px;
          }

          .slick-prev::before {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 12px;
            margin-left:25px !important;
          }

          // .btn1{
          //   transition:all ease-out 0.8s;
          // }

        `}
      </style>

      <Slider {...settings} className=" w-[70%] flex border ">
        {product.map((item, index) => (
          <div
            key={index}
            className=" h-[368px] w-52 bg-white"
          >

            <div
              className="btn1 bg-no-repeat bg-center mt-6 h-[60%] w-full hover:h-[70%] hover:-mt-2"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="mt-2">
              <h6 className=" font-bold text-xs">{item.name}</h6>
              <h6 className="text-green-600 text-sm mt-2">
                from {item.price}
              </h6>
              <h6 className="text-gray-400 text-sm ">{item.details}</h6>
            </div>

          </div>
        ))}
      </Slider>
    </>
  );
};
